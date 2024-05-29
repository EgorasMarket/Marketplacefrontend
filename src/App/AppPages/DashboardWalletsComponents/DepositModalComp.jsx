import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const DepositModalComp = ({
  symbol,
  DynamicTitle1,
  DynamicPara1,
  closeModal,
  DynamicFunc1,
  DynamicFunc2,
  DepositModaldiv,
}) => {
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_cont">
        <CloseOutlinedIcon
          className="depositMoneyDiv_icon"
          onClick={closeModal}
        />
        <div className="depositMoneyDiv_cont_1">
          <div className="depositMoneyDiv_cont_title_cont">
            <div className="depositMoneyDiv_cont_title_cont_title">
              {symbol} Wallet Deposit
            </div>
            <div className="depositMoneyDiv_cont_title_cont_para">
              Supercharge your {symbol} wallet with an array of swift and
              efficient funding options!
            </div>
          </div>
          <div className="depositMoneyDiv_cont_body">
            <div
              className="depositMoneyDiv_cont_body_cont1"
              onClick={DynamicFunc1}
            >
              {DepositModaldiv === "Naira" ? (
                <AccountBalanceOutlinedIcon className="depositMoneyDiv_cont_body_cont1_icon" />
              ) : (
                <WalletOutlinedIcon className="depositMoneyDiv_cont_body_cont1_icon" />
              )}

              <div className="depositMoneyDiv_cont_body_cont1_title_body">
                <div className="depositMoneyDiv_cont_body_cont1_title">
                  {DynamicTitle1}
                </div>
                <div className="depositMoneyDiv_cont_body_cont1_para">
                  {DynamicPara1}
                </div>
              </div>
            </div>
            <div
              className="depositMoneyDiv_cont_body_cont1"
              onClick={DynamicFunc2}
            >
              <AppShortcutOutlinedIcon className="depositMoneyDiv_cont_body_cont1_icon" />
              <div className="depositMoneyDiv_cont_body_cont1_title_body">
                <div className="depositMoneyDiv_cont_body_cont1_title">
                  Deposit Via Username
                </div>
                <div className="depositMoneyDiv_cont_body_cont1_para">
                  Add funds directly from an egoras user
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="depositMoneyDiv_cont_2">
          <button className="depositMoneyDiv_cont_2_btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositModalComp;
