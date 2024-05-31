import React, { useEffect, useState } from "react";
import { TablePagination } from "../../Components/Tables/TableComp";
import Staticdata from "../../assets/json/Static";
import "../AppStyles/dashboardTransactions.css";
import { ShimmerButton } from "react-shimmer-effects-18";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TRANSACTIONS } from "../../Services/TransactionServices";
import getUserInfo from "../../helper/userhelper";

const DashboardTransactions = () => {
  const [contentLoadingTable, setContentLoadingTable] = useState(false);
  const [transaction, setTransaction] = useState([]);

  const { data: getTransaction, isPending: getTransactionLoding } = useQuery({
    queryKey: "transaction",
    queryFn: async () => {
      const res = await TRANSACTIONS();
      console.log("====================================");
      console.log(res);
      if (res.code === 200) {
        setTransaction(res.data);
        return;
      }

      return res;
    },
  });
  const transactionFunc = async () => {
    await getTransaction();
  };
  useEffect(() => {
    transactionFunc();
  }, []);

  return (
    <div className="DashboardTransactions_div">
      <div className="DashboardTransactions_div_1">
        <div className="DashboardTransactions_div_1_title">
          Total Transactions
        </div>
        <div className="DashboardTransactions_div_1_amount">
          {getTransactionLoding ? (
            <ShimmerButton size="lg" className="custom_shimmer" />
          ) : (
            <>
              {transaction.length}{" "}
              <span className="DashboardTransactions_div_1_amount_span">
                txns
              </span>
            </>
          )}
        </div>
      </div>
      <div className="DashboardTransactions_div_2">
        <TablePagination
          tableTitle={"All Transactions"}
          TableData={transaction}
          contentLoading={getTransactionLoding}
          dummyData={Staticdata.productsTableData.slice(0, 7)}
          view={false}
          userName={getUserInfo().username}
          email={getUserInfo().email}
        />
      </div>
    </div>
  );
};

export default DashboardTransactions;
