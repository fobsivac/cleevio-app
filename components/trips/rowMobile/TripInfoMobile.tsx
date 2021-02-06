import React, { FC } from "react";
import { formatDate, formatDateYear } from "../../../utils/formats";
import { ITrip } from "../../../utils/models";
import styled from "styled-components";
import { colors } from "../../../styles/variables";

const TripInfoMobile: FC<{ trip: ITrip }> = ({ trip }) => {
  return (
    <>
      <div>
        <Label>Company</Label>
        <div>
          <div>
            <b>{trip.company_name}</b>
          </div>
          <div>
            {trip.address.street} {trip.address.street_num}
          </div>
          <div>
            {trip.address.zip} {trip.address.city}
          </div>
        </div>
      </div>
      <div>
        <Label>Date</Label>
        <div>
          {formatDate(trip.start_date)} - {formatDateYear(trip.end_date)}
        </div>
      </div>
    </>
  );
};

export default TripInfoMobile;

const Label = styled.div`
  font-size: 12px;
  color: ${colors.gray10};
  margin-bottom: 0.25rem;
`;
