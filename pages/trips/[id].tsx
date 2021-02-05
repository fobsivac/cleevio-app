import React from "react";
import { PageContent } from "../../styles/page";
import { Title } from "../../styles/title";
import TripsSidebar from "../../components/trips/TripsSidebar";
import { getTrip } from "../../rest-api/trip";
import { useQuery } from "react-query";
import { GetServerSideProps, NextPage } from "next";

const TripPage: NextPage<{ id: string }> = ({ id }) => {
  const { data, isLoading } = useQuery("trip", () => getTrip(id));

  return (
    <>
      <PageContent>
        <Title border>View/Edit trip</Title>
        {isLoading ? (
          <div>loading...</div>
        ) : (
          <div>{data?.data.company_name}</div>
        )}
      </PageContent>
      <TripsSidebar />
    </>
  );
};

export default TripPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  return { props: { id } };
};
