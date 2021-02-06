import React, { FC } from "react";
import { useRouter } from "next/router";
import Button from "../../common/Button";
import styled from "styled-components";
import { ITrip } from "../../../utils/models";
import { parseDate } from "../../../utils/formats";
import { isFuture } from "date-fns";
import { useMutation, useQueryClient } from "react-query";
import { removeTrip } from "../../../rest-api/trip";

const TripActionsMobile: FC<{ trip: ITrip; sidebar?: boolean }> = ({
  trip,
  sidebar,
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate } = useMutation((tripId: string) => removeTrip(tripId), {
    onSuccess: () => {
      queryClient.invalidateQueries("trips");
    },
  });

  const futureDate = isFuture(parseDate(trip.start_date));

  return (
    <Container>
      {!sidebar && (
        <Button
          btnType="red"
          icon="remove"
          onClick={() => mutate(trip.id)}
          wide
        >
          Remove
        </Button>
      )}
      <Button
        btnType="secondary"
        icon={futureDate ? "edit" : "arrow"}
        onClick={() => router.push(`/trips/${trip.id}`)}
        wide
      >
        {futureDate ? "Edit" : "View"} trip
      </Button>
    </Container>
  );
};

export default TripActionsMobile;

const Container = styled.div`
  > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
