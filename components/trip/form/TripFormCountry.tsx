import React, { FC } from "react";
import { FormGroup, FormSection } from "../../../styles/form";
import { ErrorMessage, getIn, useFormikContext } from "formik";
import { Input, InputError, Label } from "../../../styles/input";
import { ITripData } from "../../../utils/models";

const TripFormCountry: FC = () => {
  const { errors, touched } = useFormikContext<ITripData>();

  return (
    <FormSection>
      <FormGroup>
        <Label>Where do you want to go?</Label>
        <ErrorMessage name="address.country" component={InputError} />
        <Input
          name="address.country"
          placeholder="Type here..."
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
