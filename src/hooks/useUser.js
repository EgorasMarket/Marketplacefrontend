import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { QUERY_KEY } from "../constants/queryKeys";
import { VERIFY_USER } from "../Services/auth.services";
import { getUser, removeUser, saveUser } from "./user.localstore";

export const useUser = () => {
  const queryClient = useQueryClient();
  const {
    data: user,
    isPending: loading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: async () => {
      const res = await VERIFY_USER();
      console.log(res, "maduabuchi");
      return res.data.user;
    },

    // initialData: getUser,
    initialData: queryClient.getQueryData([QUERY_KEY.user]),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    throwOnError: (err, query) => {
      if (err) {
        console.log(err, "lolo");
        // removeUser();
      }
    },
  });

  useEffect(() => {
    console.log(user, "useEffect");
  }, [user]);

  return { user: user ?? null, loading };
};
