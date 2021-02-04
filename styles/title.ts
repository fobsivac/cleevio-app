import styled, { css } from "styled-components";
import { colors } from "./variables";

export const Title = styled.h1<{ border?: boolean }>`
  font-weight: normal;
  font-size: 1.75rem;
  padding-bottom: 1.5rem;
  ${({ border }) =>
    border &&
    css`
      border-bottom: 1px solid ${colors.gray};
    `}
`;
