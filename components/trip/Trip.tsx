import React, { FC } from "react";
import { ITripData } from "../../utils/models";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { createTrip, editTrip } from "../../rest-api/trip";
import { Formik } from "formik";
import { FieldSet, Form } from "../../styles/form";
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
import OverlayLoader from "../common/OverlayLoader";
import { AxiosResponse } from "axios";

const initValues: ITripData = {
  company_name: "",
  start_date: "",
  end_date: "",
  address: {
    city: "",
    street: "",
    street_num: undefined,
    country: "",
    zip: "",
  },
  covid: false,
  covid_test_date: "",
};

const Trip: FC<{ trip?: ITripData; id?: string; isFetching?: boolean }> = ({
  trip,
  id,
  isFetching,
}) => {
  const router = useRouter();
  const mutationOptions = {
    onSuccess: (res: AxiosResponse<{ id: string }>) => {
      router.push(`/trip/${res.data.id}`);
    },
    onError: (err: any) => {
      console.log(err);
    },
  };
  const post = useMutation(
    (data: ITripData) => createTrip(data),
    mutationOptions
  );
  const put = useMutation(
    (data: { tripData: ITripData; tripId: string }) =>
      editTrip(data.tripId, data.tripData),
    mutationOptions
  );

  const canEdit = trip ? isFuture(parseDate(trip.start_date)) : true;

  const handleSubmit = (data: ITripData) => {
    id ? put.mutate({ tripData: data, tripId: id }) : post.mutate(data);
  };

  return (
    <Formik
      initialValues={trip || initValues}
      onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={Yup.object({
        start_date: Yup.string().required("This field is required"),
        end_date: Yup.string().required("This field is required"),
        company_name: Yup.string().required("This field is required"),
        address: Yup.object().shape({
          city: Yup.string(),
          street: Yup.string(),
          street_num: Yup.number().typeError("This field must be a number"),
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
        <Container>
          {isFetching && <OverlayLoader />}
          <section>
            <Form>
              <FieldSet disabled={!canEdit}>
                <TripFormCountry disabled={!canEdit} />
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
        </Container>
      )}
    </Formik>
  );
};

export default Trip;

const Container = styled.section`
  position: relative;
`;

const SubmitSection = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.gray};
`;
