import React, { FC } from "react";
import styled from "styled-components";
import { colors, sizes } from "../../styles/variables";
import { Title } from "../../styles/title";
import Button from "../common/Button";
import { useStore } from "../../utils/store";

const PageTitle: FC = ({ children }) => {
  const toggleNavbar = useStore((store) => store.toggleNavbar);

  return (
    <Container>
      <Button btnType="secondary" icon="menu" onClick={toggleNavbar} />
      {children}
    </Container>
  );
};

export default PageTitle;

const Container = styled(Title)`
  display: flex;
  justify-content: center;
  position: relative;

  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.gray};

  button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(calc(-50% - 0.75rem));
  }

  @media screen and (min-width: ${sizes.tablet}) {
    justify-content: flex-start;
    
    button {
      display: none;
    }
  }
`;
