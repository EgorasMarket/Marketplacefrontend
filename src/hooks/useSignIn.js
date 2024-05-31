import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER } from "../Services/auth.services";

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation({
    mutationFn: ({ email, password }) => REGISTER({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY.user], data);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
      //   enqueueSnackbar("Ops.. Error on sign in. Try again!", {
      //     variant: "error",
      //   });
    },
  });
  return signInMutation;
};
