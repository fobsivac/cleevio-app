import React, { FC } from "react";
import { useRouter } from "next/router";
import Button from "../common/Button";
import styled, { css } from "styled-components";
import { ITrip } from "../../utils/models";
import { parseDate } from "../../utils/formats";
import { isFuture } from "date-fns";
import { useMutation, useQueryClient } from "react-query";
import { removeTrip } from "../../rest-api/trip";

const TripActions: FC<{
  trip: ITrip;
  sidebar?: boolean;
  mobile?: boolean;
}> = ({ trip, sidebar, mobile }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (tripId: string) => removeTrip(tripId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("trips");
      },
    }
  );

  const futureDate = isFuture(parseDate(trip.start_date));

  return (
    <Container mobile={!!mobile}>
      {!sidebar && (
        <Button
          btnType="red"
          icon="remove"
          onClick={() => mutate(trip.id)}
          wide={mobile}
          disabled={isLoading}
        >
          {mobile && "Remove"}
        </Button>
      )}
      <Button
        btnType="secondary"
        icon={futureDate ? "edit" : "arrow"}
        onClick={() => router.push(`/trips/${trip.id}`)}
        wide={mobile}
        disabled={isLoading}
      >
        {mobile && (futureDate ? "Edit trip" : "View trip")}
      </Button>
    </Container>
  );
};

export default TripActions;

const Container = styled.div<{ mobile: boolean }>`
  ${({ mobile }) =>
    mobile
      ? css`
          > *:not(:last-child) {
            margin-bottom: 0.5rem;
          }
        `
      : css`
          display: flex;

          *:not(:last-child) {
            margin-right: 1rem;
          }
        `}
`;
