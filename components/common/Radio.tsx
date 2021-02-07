import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import { Field, useFormikContext } from "formik";

const Radio: FC<{
  name: string;
  value: any;
}> = ({ name, value, children }) => {
  const { values, setFieldValue } = useFormikContext<{
    [key: string]: any;
  }>();

  const handleChange = () => setFieldValue(name, value);

  return (
    <Container checked={values[name] === value} onClick={handleChange}>
      <Field
        type="radio"
        name={name}
        value={value}
        checked={values[name] === value}
        onChange={handleChange}
      />
      <span>{children}</span>
    </Container>
  );
};

export default Radio;

export const Container = styled.div<{ checked?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;

  color: ${({ checked }) => (checked ? colors.black : colors.gray6)};
  background-color: ${({ checked }) => (checked ? colors.gray2 : colors.gray)};
  border-radius: 10px;
  transition: all 0.2s ease-in-out;

  > span {
    margin-left: 0.5rem;
  }

  input {
    filter: grayscale(100%);
  }

  &:hover {
    background-color: ${colors.gray2};
    cursor: pointer;
  }
`;
