import React from "react";
import { NextPage } from "next";
import { PageContent } from "../../styles/page";
import Trip from "../../components/trip/Trip";
import TripSidebar from "../../components/trip/TripSidebar";
import PageTitle from "../../components/layout/PageTitle";

const NewTripPage: NextPage = () => {
  return (
    <>
      <PageContent>
        <PageTitle>New trip</PageTitle>
        <Trip />
      </PageContent>
      <TripSidebar />
    </>
  );
};

export default NewTripPage;
