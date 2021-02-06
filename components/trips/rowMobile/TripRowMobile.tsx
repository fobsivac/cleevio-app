import React, { FC } from "react";
import styled from "styled-components";
import { ITrip } from "../../../utils/models";
import { colors } from "../../../styles/variables";
import TripInfoMobile from "./TripInfoMobile";
import TripFlagMobile from "./TripFlagMobile";
import TripActionsMobile from "./TripActionsMobile";

const TripRowMobile: FC<{ trip: ITrip; sidebar?: boolean }> = ({
  trip,
  sidebar,
}) => {
  return (
    <Container>
      <TripFlagMobile country={trip.address.country} />
      <TripInfoMobile trip={trip} />
      <TripActionsMobile trip={trip} sidebar={sidebar} />
    </Container>
  );
};

export default TripRowMobile;

const Container = styled.div`
  padding: 1rem;

  background-color: ${colors.secondary};
  border-radius: 10px;

  font-size: 14px;

  > div:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;
