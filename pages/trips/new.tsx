import React from "react";
import { NextPage } from "next";
import { PageContent } from "../../styles/page";
import { Title } from "../../styles/title";
import TripsSidebar from "../../components/trips/TripsSidebar";

const NewTripPage: NextPage = () => {
  return (
    <>
      <PageContent>
        <Title border>New Trip</Title>
        <div>new trip</div>
      </PageContent>
      <TripsSidebar />
    </>
  );
};

export default NewTripPage;
