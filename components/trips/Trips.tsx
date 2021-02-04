import React, { FC } from "react";
import styled from "styled-components";
import Trip from "./Trip";

const Trips: FC = () => {
  return (
    <Container>
      {Array.from({ length: 4 }).map((_, i) => (
        <Trip key={i} />
      ))}
    </Container>
  );
};

export default Trips;

const Container = styled.section`
  display: flex;
  flex-flow: column;
  padding: 2rem 0;

  > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
