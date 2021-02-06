import React from "react";
import { PageContent } from "../../styles/page";
import { PageTitle } from "../../styles/title";
import { getTrip } from "../../rest-api/trip";
import { useQuery } from "react-query";
import { GetServerSideProps, NextPage } from "next";
import Trip from "../../components/trip/Trip";
import TripSidebar from "../../components/trip/TripSidebar";
import { parseDate } from "../../utils/formats";
import { isFuture } from "date-fns";
import Loader from "../../components/common/Loader";

const TripPage: NextPage<{ id: string }> = ({ id }) => {
  const { data, isLoading, isError } = useQuery("trip", () => getTrip(id));

  const getTitle = (date: string | undefined): string => {
    if (!date) return "New";
    const parsed = parseDate(date);
    return isFuture(parsed) ? "Edit" : "View";
  };

  return (
    <>
      <PageContent>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>error</div>
        ) : (
          <>
            <PageTitle>{getTitle(data?.data.start_date)} trip</PageTitle>
            <Trip trip={data?.data} />
          </>
        )}
      </PageContent>
      <TripSidebar />
    </>
  );
};

export default TripPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query;
  return { props: { id } };
};
