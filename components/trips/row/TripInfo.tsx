import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/variables";
import { ITrip } from "../../../utils/models";
import { formatDate, formatDateYear } from "../../../utils/formats";
import { useStore } from "../../../utils/store";

const TripInfo: FC<{ trip: ITrip }> = ({ trip }) => {
  const countries = useStore((store) => store.countries);
  const country = countries.find((c) => c.value === trip.address.country);

  return (
    <Container>
      <Row>
        <Country>{country?.label || "Unknown"}</Country>
        <Divider />
        <Details>
          {formatDate(trip.start_date)} - {formatDateYear(trip.end_date)}
        </Details>
      </Row>
      <Row>
        <Company>{trip.company_name}</Company>
        <Divider />
        <Details>
          {trip.address.street} {trip.address.street_num}, {trip.address.zip}{" "}
          {trip.address.city}
        </Details>
      </Row>
    </Container>
  );
};

export default TripInfo;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-self: stretch;
  min-width: 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Country = styled.span`
  font-weight: 600;
`;

const Company = styled.span`
  font-size: 14px;
`;

const Details = styled.span`
  filter: contrast(0);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Divider = styled.span`
  display: inline-block;

  min-width: 1px;
  height: 0.5rem;

  margin: 0 1rem;
  background-color: ${colors.gray};
  filter: contrast(0);
`;
