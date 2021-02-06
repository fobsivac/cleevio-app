import React, { FC } from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { removeTrip } from "../../../rest-api/trip";
import { ITrip } from "../../../utils/models";
import { parseDate } from "../../../utils/formats";
import { isFuture } from "date-fns";

const TripActions: FC<{ trip: ITrip }> = ({ trip }) => {
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
      <Button btnType="red" icon="remove" onClick={() => mutate(trip.id)} />
      <Button
        btnType="secondary"
        icon={futureDate ? "edit" : "arrow"}
        onClick={() => router.push(`/trips/${trip.id}`)}
      />
    </Container>
  );
};

export default TripActions;

const Container = styled.div`
  display: flex;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;
