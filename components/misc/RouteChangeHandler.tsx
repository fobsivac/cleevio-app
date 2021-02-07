import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import { useStore } from "../../utils/store";

const RouteChangeHandler: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const setNavbar = useStore((store) => store.setNavbar);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setNavbar(false);
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? <Container /> : null;
};

export default RouteChangeHandler;

const Container = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100vw;
  height: 3px;

  background-color: ${colors.primary};
  animation: 3s fill ease-out;

  @keyframes fill {
    0% {
      width: 0;
    }
    100% {
      width: 100vw;
    }
  }
`;
