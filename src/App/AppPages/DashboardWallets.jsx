import React, { useEffect, useState } from "react";
import "../AppStyles/DashboardWallet.css";
import WalletBalanceDisplay from "./DashboardWalletsComponents/WalletBalanceDisplay";
import DepositModalComp from "./DashboardWalletsComponents/DepositModalComp";
import WithdrawModalComp from "./DashboardWalletsComponents/WithdrawModalComp";
import { QRCode } from "react-qrcode-logo";
import DepositUsd from "./DashboardWalletsComponents/depositUsd";
import DepositUsdFromUser from "./DashboardWalletsComponents/depositUsdFromUser";
import SendUsdInternal from "./DashboardWalletsComponents/sendUsdInternal";
import SendUsdExternal from "./DashboardWalletsComponents/sendUsdExternal";
import { Table } from "../../Components/Tables/TableComp";
import Staticdata from "../../assets/json/Static";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TRANSACTIONS } from "../../Services/TransactionServices";
import { USER_BALANCE } from "../../Services/TransactionServices";
import { getUserMainInfo } from "../../hooks/useGetUserInfo";

const DashboardWallets = () => {
  const [nairaBalance, setNairaBalance] = useState("0");
  const [egcBalance, setEgcBalance] = useState("0");
  const [activeTab, setActiveTab] = useState("naira");
  const [transaction, setTransaction] = useState([]);
  const [depositMoney, setDepositMoney] = useState(false);
  const [withdrawMoney, setWithdrawMoney] = useState(false);
  const [egcBlockchainDeposit, setEgcBlockchainDeposit] = useState(false);
  const [egcBlockchainWithdrawal, setEgcBlockchainWithdrawal] = useState(false);
  const [egcUserWithdrawal, setEgcUserWithdrawal] = useState(false);
  const [egcUserDeposit, setEgcUserDeposit] = useState(false);
  const [usdBlockchainDeposit, setUsdBlockchainDeposit] = useState(false);
  const [usdBlockchainWithdrawal, setUsdBlockchainWithdrawal] = useState(false);
  const [usdUserWithdrawal, setUsdUserWithdrawal] = useState(false);
  const [usdUserDeposit, setUsdUserDeposit] = useState(false);
  const [depositMoneyNaira, setDepositMoneyNaira] = useState(false);
  const [depositMoneyUSD, setDepositMoneyUSD] = useState(false);
  const [depositMoneyNairaBank, setDepositMoneyNairaBank] = useState(false);
  const [depositMoneyNairaUser, setDepositMoneyNairaUser] = useState(false);
  const [withdrawMoneyNaira, setWithdrawMoneyNaira] = useState(false);
  const [withdrawMoneyUSD, setWithdrawMoneyUSD] = useState(false);
  const [nairaBankWithdrawal, setNairaBankWithdrawal] = useState(false);
  const [nairaUserWithdrawal, setNairaUserWithdrawal] = useState(false);
  const [contentLoadingTable, setContentLoadingTable] = useState(true);
  const [userBal, setUserBal] = useState(0);

  const ToggleDepositMoneyUSDModal = () => {
    setDepositMoneyUSD(!depositMoneyUSD);
  };

  const ToggleWithdrawMoneyUSDModal = () => {
    setWithdrawMoneyUSD(!withdrawMoneyUSD);
  };

  const ToggleUSDBlockchainDepositModal = () => {
    setUsdBlockchainDeposit(!usdBlockchainDeposit);
    setDepositMoneyUSD(!depositMoneyUSD);
  };

  const ToggleUSDBlockchainWithdrawModal = () => {
    setUsdBlockchainWithdrawal(!usdBlockchainWithdrawal);
    setWithdrawMoneyUSD(!withdrawMoneyUSD);
  };

  const ToggleUSDUserDepositModal = () => {
    setUsdUserDeposit(!usdUserDeposit);
    setDepositMoneyUSD(!depositMoneyUSD);
  };

  const ToggleUSDUserWithdrawtModal = () => {
    setUsdUserWithdrawal(!usdUserWithdrawal);
    setWithdrawMoneyUSD(!withdrawMoneyUSD);
  };
  const { data: userBalance, isPending: balancePending } = useQuery({
    queryKey: ["userBalance"],
    queryFn: async () => {
      const res = await USER_BALANCE();
      console.log("====================================");
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        switch (res.data[i].name) {
          case "Egochain":
            setUserBal(res.data[i]?.value === null ? "0" : res.data[i]?.value);
            break;
        }
      }

      return res;
    },
  });
  // const userBalFunc = async () => {
  //   await userBalance();
  // };
  // useEffect(() => {
  //   userBalFunc();
  // }, []);

  const { data: getTransaction, isPending: getTransactionLoding } = useQuery({
    queryKey: ["transaction"],
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
  // const transactionFunc = async () => {
  //   await getTransaction();
  // };
  // useEffect(() => {
  //   transactionFunc();
  // }, []);
  return (
    <div className="DashboardWalletsDiv">
      <div className="DashboardWalletsDiv_body">
        <WalletBalanceDisplay
          walletBal={parseFloat(userBal).toFixed(2)}
          walletsymbol={"EGAX"}
          depositFunc={ToggleDepositMoneyUSDModal}
          withdrawFunc={ToggleWithdrawMoneyUSDModal}
          loading={balancePending}
          img="/img/egax_logo.png"
        />

        <div className="DashboardWalletsDiv_area3">
          <Table
            tableTitle={"Wallet Transactions"}
            TableData={transaction
              .filter((data) => data.type !== "PURCHASE")
              .slice(0, 7)}
            contentLoading={getTransactionLoding}
            dummyData={Staticdata.productsTableData.slice(0, 8)}
            userName={getUserMainInfo()?.username}
          />
        </div>
      </div>

      {/* ============= */}
      {/* ============= */}
      {/* ============= */}
      {/* ============= */}
      {/* ============= */}
      {depositMoneyUSD ? (
        <DepositModalComp
          symbol={"EGAX"}
          DynamicFunc1={ToggleUSDBlockchainDepositModal}
          DynamicFunc2={ToggleUSDUserDepositModal}
          DynamicPara1={"Add funds directly from a blockachain account "}
          DynamicTitle1={"Deposit via blockchain "}
          closeModal={ToggleDepositMoneyUSDModal}
          DepositModaldiv={"EGAX"}
        />
      ) : null}

      {withdrawMoneyUSD ? (
        <WithdrawModalComp
          symbol={"EGAX"}
          DynamicFunc1={ToggleUSDBlockchainWithdrawModal}
          DynamicFunc2={ToggleUSDUserWithdrawtModal}
          DynamicPara1={
            "Transfer your EGAX funds with an array of swift and efficient transfer options!"
          }
          DynamicTitle1={"EGAX Wallet Withdrawal "}
          closeModal={ToggleWithdrawMoneyUSDModal}
          WithdrawModaldiv={"EGAX"}
        />
      ) : null}

      {usdBlockchainDeposit ? (
        <DepositUsd
          ToggleEgcBlockchainDepositModal={ToggleUSDBlockchainDepositModal}
        />
      ) : null}
      {usdBlockchainWithdrawal ? (
        <SendUsdExternal
          ToggleEgcBlockchainWithdrawModal={ToggleUSDBlockchainWithdrawModal}
          balance={parseFloat(userBal).toFixed(4)}
        />
      ) : null}
      {usdUserDeposit ? (
        <DepositUsdFromUser
          ToggleEgcUserDepositModal={ToggleUSDUserDepositModal}
        />
      ) : null}
      {usdUserWithdrawal ? (
        <SendUsdInternal
          ToggleEgcUserWithdrawtModal={ToggleUSDUserWithdrawtModal}
          balance={parseFloat(userBal).toFixed(4)}
        />
      ) : null}
    </div>
  );
};

export default DashboardWallets;
