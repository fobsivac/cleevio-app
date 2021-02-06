import React, { FC } from "react";
import { FormGroup, FormSection, Input, Label } from "../../../styles/form";

const TripFormDuration: FC = () => {
  return (
    <FormSection>
      <FormGroup>
        <Label htmlFor="start_date">Start date</Label>
        <Input type="text" name="start_date" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="end_date">End date</Label>
        <Input type="text" name="end_date" />
      </FormGroup>
    </FormSection>
  );
};

export default TripFormDuration;
