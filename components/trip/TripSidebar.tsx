import React, { FC } from "react";
import { useQuery } from "react-query";
import { getTrips } from "../../rest-api/trip";
import { Sidebar } from "../../styles/sidebar";
import Trips from "../trips/Trips";
import { Title } from "../../styles/title";
import Loader from "../common/Loader";

const TripSidebar: FC = () => {
  const { data, isLoading } = useQuery("trips", getTrips);

  return (
    <Sidebar>
      <Title>Trips</Title>
      {isLoading ? <Loader /> : <Trips trips={data?.data} sidebar />}
    </Sidebar>
  );
};

export default TripSidebar;
