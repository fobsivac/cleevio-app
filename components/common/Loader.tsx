import React, { FC } from "react";
import styled from "styled-components";

const Loader: FC = () => {
  return (
    <Container>
      <Spinner src="/icons/loader.svg" width={32} height={32} />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Spinner = styled.img`
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
