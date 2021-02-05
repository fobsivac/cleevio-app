import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import { Trip } from "../../utils/models";

const TripInfo: FC<{ trip: Trip }> = ({ trip }) => {
  return (
    <Container>
      <Row>
        <Country>{trip.address.country}</Country>
        <Divider />
        <Details>
          {trip.start_date} - {trip.end_date}
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
`;

const Divider = styled.span`
  display: inline-block;

  width: 1px;
  height: 0.75rem;

  margin: 0 1rem;
  background-color: ${colors.gray};
  filter: contrast(0);
`;
