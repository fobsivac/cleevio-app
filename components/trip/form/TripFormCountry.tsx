import React, { FC } from "react";
import { FormGroup, FormSection } from "../../../styles/form";
import { ErrorMessage, getIn, useFormikContext } from "formik";
import { InputError, Label } from "../../../styles/input";
import { ITripData } from "../../../utils/models";
import { useStore } from "../../../utils/store";
import Select from "react-select";
import { colors } from "../../../styles/variables";
import TripCountry from "../../trips/TripCountry";

const TripFormCountry: FC<{ disabled?: boolean }> = ({ disabled }) => {
  const {
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormikContext<ITripData>();
  const countries = useStore((store) => store.countries);

  const getCountry = (value: string) =>
    countries.find((c) => c.value === value);

  return (
    <FormSection>
      <FormGroup>
        <Label>Where do you want to go?</Label>
        <ErrorMessage name="address.country" component={InputError} />
        <Select
          options={countries}
          value={getCountry(values.address.country)}
          onChange={(option) => setFieldValue("address.country", option?.value)}
          formatOptionLabel={({ value }) => (
            <TripCountry country={value} mobile />
          )}
          styles={{
            control: (styles, data) => ({
              ...styles,
              borderRadius: "10px",
              borderColor:
                getIn(errors, "address.country") &&
                getIn(touched, "address.country")
                  ? colors.red
                  : data.isDisabled
                  ? colors.gray2
                  : colors.gray,
              padding: "0.25rem",
            }),
            option: (styles, data) => ({
              ...styles,
              backgroundColor: data.isSelected
                ? colors.secondaryDark
                : data.isFocused
                ? colors.secondary
                : colors.white,
              color: data.isSelected ? colors.black : colors.gray6,
              fontWeight: 400,
              ":hover": {
                ...styles[":hover"],
                cursor: "pointer",
              },
              borderBottom: `1px solid ${colors.gray2}`,
              padding: "0.75rem",
            }),
            placeholder: (styles) => ({
              ...styles,
              color: colors.gray2,
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
          }}
          placeholder="Select country"
          isDisabled={disabled}
        />
      </FormGroup>
    </FormSection>
  );
};

export default TripFormCountry;
