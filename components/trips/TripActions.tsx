import React, { FC } from "react";
import styled from "styled-components";
import Button from "../base/Button";

const TripActions: FC = () => {
  return (
    <Container>
      <Button icon="remove" />
      <Button icon="edit" />
    </Container>
  );
};

export default TripActions;

const Container = styled.div`
  display: flex;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;
