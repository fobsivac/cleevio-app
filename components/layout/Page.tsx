import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Sidebar from "./Sidebar";

const Page: FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
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
  padding: 2rem;
  background-color: ${colors.white};
  overflow-y: auto;
`;
