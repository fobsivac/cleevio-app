import { useFormikContext } from "formik";
import React, { ChangeEvent, FC } from "react";
import { FormGroup, FormSection, Input, Label } from "../../../styles/form";
import { parseNum } from "../../../utils/formats";

const TripFormCompany: FC = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <FormSection>
      <FormGroup>
        <Label htmlFor="company_name">Company name</Label>
        <Input type="text" name="company_name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address.city">City</Label>
        <Input type="text" name="address.city" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address.street">Street</Label>
        <Input type="text" name="address.street" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address.street_num">Street number</Label>
        <Input
          type="text"
          name="address.street_num"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFieldValue("address.street_num", parseNum(event.target.value))
          }
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address.zip">Zip code</Label>
        <Input type="text" name="address.zip" />
      </FormGroup>
    </FormSection>
  );
};

export default TripFormCompany;
