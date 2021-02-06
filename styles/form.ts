import styled from "styled-components";
import { colors } from "./variables";
import { Field, Form as FormikForm } from "formik";

export const Input = styled(Field)`
  padding: 0.75rem;
  outline: none;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
  background-color: ${colors.white};
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-flow: column;
`;

export const FormSection = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background-color: ${colors.secondary};

  ${FormGroup}:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Form = styled(FormikForm)`
  width: 100%;
  max-width: 30rem;
  margin: 0 auto;

  ${FormSection}:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
