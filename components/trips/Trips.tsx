import React, { FC } from "react";
import TripRow from "./TripRow";
import { Trip } from "../../utils/models";
import styled from "styled-components";

const Trips: FC<{ trips?: Trip[] }> = ({ trips }) => {
  return (
    <Container>
      {!trips ? (
        <div>No trips</div>
      ) : (
        trips.map((trip) => <TripRow key={trip.id} trip={trip} />)
      )}
    </Container>
  );
};

export default Trips;

const Container = styled.section`
  display: flex;
  flex-flow: column;
  padding: 2rem 0;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
