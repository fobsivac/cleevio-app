import React, { FC } from "react";
import styled, { css } from "styled-components";
import { colors, sizes } from "../../styles/variables";
import TripInfo from "./TripInfo";
import { ITrip } from "../../utils/models";
import TripCountry from "./TripCountry";
import TripActions from "./TripActions";
import { useMedia } from "react-use";

const TripRow: FC<{ trip: ITrip; sidebar?: boolean; mobile?: boolean }> = ({
  trip,
  sidebar,
  mobile,
}) => {
  const isWide = useMedia(`(min-width: ${sizes.mobile})`);
  const isMobile = mobile || !isWide;

  return (
    <Container mobile={isMobile}>
      <TripCountry country={trip.address.country} mobile={isMobile} />
      <TripInfo trip={trip} mobile={isMobile} />
      <TripActions trip={trip} mobile={isMobile} sidebar={sidebar} />
    </Container>
  );
};

export default TripRow;

const Container = styled.div<{ mobile?: boolean }>`
  ${({ mobile }) =>
    mobile
      ? css`
          padding: 1rem;
          font-size: 14px;

          > div:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        `
      : css`
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-column-gap: 1.25rem;
          align-items: center;
          padding: 1.25rem;
        `}

  background-color: ${colors.secondary};
  border-radius: 10px;
`;
