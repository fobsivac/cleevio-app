import React, { FC } from "react";
import { FormGroup, FormSection } from "../../../styles/form";
import { ErrorMessage, getIn, useFormikContext } from "formik";
import { Input, InputError, Label } from "../../../styles/input";
import ReactDatePicker from "react-datepicker";
import { formatApiDate, parseDatepickerDate } from "../../../utils/formats";

const fields = [
  { id: "start_date", label: "Start date" },
  { id: "end_date", label: "End date" },
];

const TripFormDuration: FC = () => {
  const { errors, touched, setFieldValue, values } = useFormikContext<{
    [key: string]: any;
  }>();

  return (
    <FormSection>
      {fields.map((f) => (
        <FormGroup key={f.id}>
          <Label htmlFor={f.id}>{f.label}</Label>
          <ErrorMessage component={InputError} name={f.id} />
          <ReactDatePicker
            key={f.id}
            selected={parseDatepickerDate(values[f.id])}
            dateFormat="dd. MM. yyyy"
            onChange={(date) => setFieldValue(f.id, formatApiDate(date))}
            customInput={
              <Input
                name={f.id}
                placeholder="yyyy-mm-dd"
                $error={getIn(errors, f.id) && getIn(touched, f.id)}
                autoComplete="off"
              />
            }
          />
        </FormGroup>
      ))}
    </FormSection>
  );
};

export default TripFormDuration;
