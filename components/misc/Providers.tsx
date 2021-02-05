import React, { FC } from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
