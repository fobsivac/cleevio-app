import styled, { css } from "styled-components";
import { colors } from "./variables";
import { Field } from "formik";

export const Input = styled(Field)<{ $error?: boolean }>`
  padding: 0.75rem;
  outline: none;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
  background-color: ${colors.white};

  &:focus {
    border-color: ${colors.gray2};
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${colors.red} !important;
    `}

  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray2};
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const InputError = styled.span`
  color: ${colors.red};
  font-size: 12px;
  margin-bottom: 0.25rem;
`;
