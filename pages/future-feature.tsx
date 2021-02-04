import React, { FC } from "react";
import { PageContent } from "../styles/page";
import { Sidebar } from "../styles/sidebar";
import { Title } from "../styles/title";

const FutureFeature: FC = () => {
  return (
    <>
      <PageContent>
        <Title>Future feature coming soon!</Title>
      </PageContent>
      <Sidebar />
    </>
  );
};

export default FutureFeature;
