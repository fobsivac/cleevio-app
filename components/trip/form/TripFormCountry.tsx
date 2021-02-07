import React, { FC } from "react";
import {
  FormGroup,
  FormSection,


} from "../../../styles/form";
import { ErrorMessage, getIn, useFormikContext } from "formik";
import {Input, InputError, Label} from "../../../styles/input";

const TripFormCountry: FC = () => {
  const { errors, touched } = useFormikContext();

  return (
    <FormSection>
      <FormGroup>
        <Label htmlFor="address.country">Where do you want to go?</Label>
        <ErrorMessage component={InputError} name="address.country" />
        <Input
          name="address.country"
          $error={
            getIn(errors, "address.country") &&
            getIn(touched, "address.country")
          }
        />
      </FormGroup>
    </FormSection>
  );
};

export default TripFormCountry;
