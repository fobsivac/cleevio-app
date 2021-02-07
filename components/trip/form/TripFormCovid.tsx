import React from "react";
import { FormGroup, FormSection } from "../../../styles/form";
import styled from "styled-components";
import { Input, InputError, Label } from "../../../styles/input";
import Radio from "../../common/Radio";
import { ErrorMessage, useFormikContext } from "formik";
import { ITripData } from "../../../utils/models";

const TripFormCovid = () => {
  const { errors, touched, values } = useFormikContext<ITripData>();

  return (
    <FormSection>
      <FormGroup>
        <Label>
          Have you been recently tested for <b>COVID-19?</b>
        </Label>
        <RadioButtons>
          <Radio name="covid" value={true}>
            Yes
          </Radio>
          <Radio name="covid" value={false}>
            No
          </Radio>
        </RadioButtons>
      </FormGroup>
      {values.covid && (
        <FormGroup>
          <Label htmlFor="covid_test_date">
            Date of receiving test results
          </Label>
          <ErrorMessage component={InputError} name="covid_test_date" />
          <Input
            name="covid_test_date"
            invalid={errors.covid_test_date && touched.covid_test_date}
          />
        </FormGroup>
      )}
    </FormSection>
  );
};

export default TripFormCovid;

const RadioButtons = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 0.75rem;
  }
`;
