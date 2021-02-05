import React, { FC } from "react";
import styled from "styled-components";
import Button from "../base/Button";
import { useRouter } from "next/router";

const TripActions: FC<{ id: string }> = ({ id }) => {
  const router = useRouter();

  return (
    <Container>
      <Button icon="remove" />
      <Button icon="edit" onClick={() => router.push(`/trips/${id}`)} />
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
