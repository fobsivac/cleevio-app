import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Navbar from "./Navbar";

const Page: FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  position: relative;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${colors.white};
`;
