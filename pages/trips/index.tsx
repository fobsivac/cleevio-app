import React from "react";
import Trips from "../../components/trips/Trips";
import TripsSidebar from "../../components/trips/TripsSidebar";
import { PageContent } from "../../styles/page";
import { PageTitle } from "../../styles/title";
import { NextPage } from "next";
import { useQuery } from "react-query";
import { getTrips } from "../../rest-api/trip";
import Loader from "../../components/common/Loader";

const TripsPage: NextPage = () => {
  const { data, isLoading } = useQuery("trips", getTrips);

  return (
    <>
      <PageContent>
        <PageTitle>Your Trips</PageTitle>
        {isLoading ? <Loader /> : <Trips trips={data?.data} />}
      </PageContent>
      <TripsSidebar />
    </>
  );
};

export default TripsPage;
