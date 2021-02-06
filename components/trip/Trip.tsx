import React, { FC } from "react";
import { ITrip, ITripData } from "../../utils/models";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { createTrip } from "../../rest-api/trip";
import { Formik } from "formik";
import { Form } from "../../styles/form";
import TripFormCountry from "./form/TripFormCountry";
import TripFormDuration from "./form/TripFormDuration";
import TripFormCompany from "./form/TripFormCompany";
import Button from "../common/Button";
import styled from "styled-components";
import { colors } from "../../styles/variables";

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

  return (
    <Formik
      initialValues={trip ?? initValues}
      onSubmit={(data: ITripData) => mutate(data)}
    >
      {({ submitForm, isSubmitting }) => (
        <>
          <section>
            <Form>
              <TripFormCountry />
              <TripFormDuration />
              <TripFormCompany />
            </Form>
          </section>
          <SubmitSection>
            <Button icon="check" loading={isSubmitting} onClick={submitForm}>
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
