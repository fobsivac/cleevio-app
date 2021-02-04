import styled from "styled-components";
import { colors } from "./variables";

export const Sidebar = styled.aside`
  width: 20rem;
  height: 100vh;
  padding: 2rem;
  border-left: 1px solid ${colors.gray};
  overflow-y: auto;
`;
