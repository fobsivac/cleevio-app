import { ErrorMessage, getIn, useFormikContext } from "formik";
import React, { ChangeEvent, FC } from "react";
import { FormGroup, FormSection } from "../../../styles/form";
import { parseNum } from "../../../utils/formats";
import { Input, InputError, Label } from "../../../styles/input";

const fields = [
  { id: "company_name", label: "Company name" },
  { id: "address.city", label: "City" },
  { id: "address.street", label: "Street" },
  { id: "address.street_num", label: "Street number" },
  { id: "address.zip", label: "Zip code" },
];

const TripFormCompany: FC = () => {
  const { setFieldValue, errors, touched } = useFormikContext();

  return (
    <FormSection>
      {fields.map((f) => (
        <FormGroup key={f.id}>
          <Label htmlFor={f.id}>{f.label}</Label>
          <ErrorMessage component={InputError} name={f.id} />
          <Input
            name={f.id}
            placeholder="Type here..."
            $error={getIn(errors, f.id) && getIn(touched, f.id)}
            {...(f.id === "address.street_num"
              ? {
                  onChange: (event: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue(
                      "address.street_num",
                      parseNum(event.target.value)
                    ),
                }
              : {})}
          />
        </FormGroup>
      ))}
    </FormSection>
  );
};

export default TripFormCompany;
