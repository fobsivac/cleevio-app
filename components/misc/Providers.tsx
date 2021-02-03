import React, { FC } from "react";
import GlobalStyles from "../../styles/GlobalStyles";

const Providers: FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Providers;
