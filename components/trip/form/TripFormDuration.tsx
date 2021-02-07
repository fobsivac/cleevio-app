import React, { FC } from "react";
import {
  FormGroup,
  FormSection,


} from "../../../styles/form";
import { ErrorMessage, getIn, useFormikContext } from "formik";
import {Input, InputError, Label} from "../../../styles/input";

const fields = [
  { id: "start_date", label: "Start date" },
  { id: "end_date", label: "End date" },
];

const TripFormDuration: FC = () => {
  const { errors, touched } = useFormikContext();

  return (
    <FormSection>
      {fields.map((f) => (
        <FormGroup key={f.id}>
          <Label htmlFor={f.id}>{f.label}</Label>
          <ErrorMessage component={InputError} name={f.id} />
          <Input
            name={f.id}
            invalid={getIn(errors, f.id) && getIn(touched, f.id)}
          />
        </FormGroup>
      ))}
    </FormSection>
  );
};

export default TripFormDuration;
