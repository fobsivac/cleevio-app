import React, { FC } from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

import "react-datepicker/dist/react-datepicker.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Providers: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
