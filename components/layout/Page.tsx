import React, { FC } from "react";
import styled from "styled-components";
import { colors, sizes } from "../../styles/variables";
import Navbar from "./Navbar";
import { Sidebar } from "../../styles/sidebar";
import RouteChangeLoader from "../common/RouteChangeLoader";

const Page: FC = ({ children }) => {
  return (
    <Container>
      <RouteChangeLoader />
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  position: relative;

  @media screen and (min-width: ${sizes.tablet}) {
    grid-template-columns: auto 1fr;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  background-color: ${colors.white};

  @media screen and (min-width: ${sizes.laptop}) {
    grid-template-columns: 1fr auto;

    ${Sidebar} {
      display: flex;
      flex-direction: column;
    }
  }
`;
