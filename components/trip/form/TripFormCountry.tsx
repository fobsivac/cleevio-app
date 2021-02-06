import React, { FC } from "react";
import { FormGroup, FormSection, Input, Label } from "../../../styles/form";

const TripFormCountry: FC = () => {
  return (
    <FormSection>
      <FormGroup>
        <Label htmlFor="address.country">Where do you want to go?</Label>
        <Input type="text" name="address.country" />
      </FormGroup>
    </FormSection>
  );
};

export default TripFormCountry;
