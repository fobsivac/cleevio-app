import React from "react";
import { Title } from "../styles/title";
import { PageContent } from "../styles/page";
import Trips from "../components/trips/Trips";
import TripsSidebar from "../components/trips/TripsSidebar";

const Home = () => {
  return (
    <>
      <PageContent>
        <Title border>Your Trips</Title>
        <Trips />
      </PageContent>
      <TripsSidebar />
    </>
  );
};

export default Home;
