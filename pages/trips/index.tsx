import React from "react";
import Trips from "../../components/trips/Trips";
import TripsSidebar from "../../components/trips/TripsSidebar";
import { PageContent } from "../../styles/page";
import { Title } from "../../styles/title";
import { NextPage } from "next";
import { useQuery } from "react-query";
import { getTrips } from "../../rest-api/trip";

const TripsPage: NextPage = () => {
  const { data, isLoading } = useQuery("trips", getTrips);

  return (
    <>
      <PageContent>
        <Title border>Your Trips</Title>
        {isLoading ? <div>loading...</div> : <Trips trips={data?.data} />}
      </PageContent>
      <TripsSidebar />
    </>
  );
};

export default TripsPage;
