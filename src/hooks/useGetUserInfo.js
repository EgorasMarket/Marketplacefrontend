import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";

export const getUserMainInfo = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData([QUERY_KEY.user]);
  console.log(user, "alalalalal");

  return user;
};
