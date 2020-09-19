import { useQuery } from "@apollo/client";

import { WhoAmIData, WHO_AM_I } from "./whoAmI.gql";

export const useWhoAmI = () => {
  const { loading: whoAmILoading } = useQuery<WhoAmIData>(WHO_AM_I);

  return {
    whoAmILoading,
  };
};
