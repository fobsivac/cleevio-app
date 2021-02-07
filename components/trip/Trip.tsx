import React, { FC } from "react";
import { ITrip, ITripData } from "../../utils/models";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { createTrip } from "../../rest-api/trip";
import { Formik } from "formik";
import { Form, FieldSet } from "../../styles/form";
import TripFormCountry from "./form/TripFormCountry";
import TripFormDuration from "./form/TripFormDuration";
import TripFormCompany from "./form/TripFormCompany";
import Button from "../common/Button";
import styled from "styled-components";
import { colors } from "../../styles/variables";
import TripFormCovid from "./form/TripFormCovid";
import { parseDate } from "../../utils/formats";
import { isFuture } from "date-fns";
import * as Yup from "yup";

const initValues: ITripData = {
  company_name: "",
  start_date: "",
  end_date: "",
  address: {
    country: "",
    zip: "",
  },
  covid: false,
};

const Trip: FC<{ trip?: ITrip }> = ({ trip }) => {
  const router = useRouter();
  const { mutate } = useMutation((data: ITripData) => createTrip(data), {
    onSuccess: (res) => {
      router.push(`/trip/${res.data.id}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const canEdit = trip ? isFuture(parseDate(trip.start_date)) : true;

  return (
    <Formik
      initialValues={trip ?? initValues}
      onSubmit={(data: ITripData) => mutate(data)}
      validationSchema={Yup.object({
        start_date: Yup.string().required("This field is required"),
        end_date: Yup.string().required("This field is required"),
        company_name: Yup.string().required("This field is required"),
        address: Yup.object().shape({
          city: Yup.string(),
          street: Yup.string(),
          street_num: Yup.string(),
          country: Yup.string().required("This field is required"),
          zip: Yup.string().required("This field is required"),
        }),
        covid: Yup.boolean(),
        covid_test_date: Yup.string().when("covid", {
          is: true,
          then: Yup.string().required("This field is required"),
        }),
      })}
    >
      {({ submitForm, isSubmitting }) => (
        <>
          <section>
            <Form>
              <FieldSet disabled={!canEdit}>
                <TripFormCountry />
                <TripFormDuration />
                <TripFormCompany />
                <TripFormCovid />
              </FieldSet>
            </Form>
          </section>
          <SubmitSection>
            <Button
              icon="check"
              loading={isSubmitting}
              disabled={isSubmitting || !canEdit}
              onClick={submitForm}
            >
              Save
            </Button>
          </SubmitSection>
        </>
      )}
    </Formik>
  );
};

export default Trip;

const SubmitSection = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.gray};
`;
