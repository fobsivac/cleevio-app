import styled from "styled-components";
import {colors} from "./variables";
import {Form as FormikForm} from "formik";

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

export const FieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
`;

