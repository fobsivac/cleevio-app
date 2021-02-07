import React, { FC } from "react";
import TripRow from "./TripRow";
import { ITrip } from "../../utils/models";
import styled from "styled-components";
import OverlayLoader from "../common/OverlayLoader";

const Trips: FC<{
  trips?: ITrip[];
  sidebar?: boolean;
  isFetching?: boolean;
}> = ({ trips, sidebar, isFetching }) => {
  return (
    <Container>
      {isFetching && <OverlayLoader />}
      {!trips ? (
        <div>No trips</div>
      ) : (
        trips.map((trip) => (
          <TripRow
            key={trip.id}
            trip={trip}
            sidebar={sidebar}
            mobile={sidebar}
          />
        ))
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
