import styled from "styled-components";
import { colors } from "./variables";

export const Title = styled.h1`
  font-weight: normal;
  font-size: 1.75rem;
  padding-bottom: 1.5rem;
`;

export const PageTitle = styled(Title)`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.gray};
`;
