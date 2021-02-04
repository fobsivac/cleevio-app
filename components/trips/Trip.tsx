import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Image from "next/image";
import TripInfo from "./TripInfo";
import TripActions from "./TripActions";

const Trip: FC = () => {
  return (
    <Container>
      <Flag>
        <Image src="/flags/cz.svg" width={40} height={40} />
      </Flag>
      <TripInfo />
      <TripActions />
    </Container>
  );
};

export default Trip;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.25rem;
  align-items: center;

  padding: 1.25rem;
  background-color: ${colors.secondary};

  border-radius: 10px;
`;

const Flag = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 0.25rem;
  background-color: ${colors.gray};
`;
