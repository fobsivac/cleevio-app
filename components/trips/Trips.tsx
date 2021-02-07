import React, { FC } from "react";
import TripRow from "./row/TripRow";
import { ITrip } from "../../utils/models";
import styled from "styled-components";
import TripRowMobile from "./rowMobile/TripRowMobile";
import { useMedia } from "react-use";
import { sizes } from "../../styles/variables";
import OverlayLoader from "../common/OverlayLoader";

const Trips: FC<{
  trips?: ITrip[];
  sidebar?: boolean;
  isFetching?: boolean;
}> = ({ trips, sidebar, isFetching }) => {
  const isWide = useMedia(`(min-width: ${sizes.mobile})`);

  return (
    <Container>
      {isFetching && <OverlayLoader />}
      {!trips ? (
        <div>No trips</div>
      ) : (
        trips.map((trip) =>
          sidebar || !isWide ? (
            <TripRowMobile key={trip.id} trip={trip} sidebar={sidebar} />
          ) : (
            <TripRow key={trip.id} trip={trip} />
          )
        )
      )}
    </Container>
  );
};

export default Trips;

const Container = styled.section`
  position: relative;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
