import React from "react";
import { useQuery } from "@tanstack/react-query";
import { PRICE_TICKER } from "../Services/TransactionServices";
import { numberWithCommas } from "../assets/js/numberWithCommas";

const EgaxUsdPrice = ({ num, className }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["priceTicker"],
    queryFn: async () => {
      const res = await PRICE_TICKER();
      if (res.code === 200) {
        return res.data.listThickers[4].price;
      }
      throw new Error("Failed to fetch price ticker");
    },
  });

  if (isLoading) {
    return <span>Fetching...</span>;
  }

  if (isError) {
    console.error(error);
    return <span>Error fetching price</span>;
  }

  const priceTicker = parseFloat(data).toFixed(2);
  return (
    <span className={className}>
      {" "}
      ≈ ${numberWithCommas((num * priceTicker).toFixed(2))}
    </span>
  );
};

export default EgaxUsdPrice;
