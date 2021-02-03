import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Image from "next/image";

const Sidebar: FC = () => {
  return (
    <Container>
      <Image src="/logo.svg" alt="Cleevio" height={38} width={134} />
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;

  width: 15rem;

  padding: 2rem;
  background-color: ${colors.secondary};
  overflow-y: auto;
`;
