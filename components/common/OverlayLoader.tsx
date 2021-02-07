import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import Loader from "./Loader";

const OverlayLoader: FC = () => {
  return (
    <Overlay>
      <Loader />
    </Overlay>
  );
};

export default OverlayLoader;

const Overlay = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${colors.white};
  opacity: 0.8;

  animation: 0.2s fade-in-8 ease-in-out;
  
  @keyframes fade-in-8 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
`;
