import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";

const TripInfo: FC = () => {
  return (
    <Container>
      <Row>
        <Country>Czech Republic</Country>
        <Divider />
        <Details>Jul 14 - Sep 20</Details>
      </Row>
      <Row>
        <Company>Daimler AG</Company>
        <Divider />
        <Details>Mercedes-Benz Plant Berlin' Daimlerstraße 143, 122...</Details>
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
