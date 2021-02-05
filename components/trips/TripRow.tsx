import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import TripInfo from "./TripInfo";
import TripActions from "./TripActions";
import { Trip } from "../../utils/models";
import TripFlag from "./TripFlag";

const TripRow: FC<{ trip: Trip }> = ({ trip }) => {
  return (
    <Container>
      <TripFlag country={trip.address.country} />
      <TripInfo trip={trip} />
      <TripActions id={trip.id} />
    </Container>
  );
};

export default TripRow;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.25rem;
  align-items: center;

  padding: 1.25rem;
  background-color: ${colors.secondary};
  border-radius: 10px;
`;
