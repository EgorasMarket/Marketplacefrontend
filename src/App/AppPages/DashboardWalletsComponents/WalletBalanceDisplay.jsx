import React from "react";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import { ShimmerButton } from "react-shimmer-effects-18";
import { numberWithCommas } from "../../../assets/js/numberWithCommas";
import { Link } from "react-router-dom";
const WalletBalanceDisplay = ({
  walletBal,
  walletsymbol,
  depositFunc,
  withdrawFunc,
  loading,
  img,
}) => {
  return (
    <div className="DashboardWalletsDiv_area2">
      <div className="DashboardWalletsDiv_area2_cont1">
        <img src={img} alt="" className="DashboardWalletsDiv_area2_cont1_img" />
        Portfolio Balance
      </div>
      <div className="DashboardWalletsDiv_area2_cont2">
        <div className="DashboardWalletsDiv_area2_cont2_area1">
          {loading ? (
            <div className="shimmerBaldiv" style={{ marginBottom: "10px" }}>
              <ShimmerButton size="lg" className="custom_shimmer" />
            </div>
          ) : (
            <>
              <div className="DashboardWalletsDiv_area2_cont2_area1_bal">
                <div className="DashboardWalletsDiv_area2_cont2_area1_bal_txt">
                  {numberWithCommas(walletBal)}
                </div>
                <span className="DashboardWalletsDiv_area2_cont2_area1_bal_span">
                  {walletsymbol}
                </span>
              </div>
            </>
          )}
          {loading ? (
            <ShimmerButton size="sm" className="custom_shimmer" />
          ) : (
            <>
              <div className="DashboardWalletsDiv_area2_cont2_area1_profit">
                _ _ _
              </div>
            </>
          )}
        </div>
        <div className="DashboardWalletsDiv_area2_cont2_area2">
          <div
            className="DashboardWalletsDiv_area2_cont2_area2_cont1"
            onClick={depositFunc}
          >
            Deposit
          </div>
          <div
            className="DashboardWalletsDiv_area2_cont2_area2_cont2b"
            onClick={withdrawFunc}
          >
            Withdraw
          </div>
        </div>
      </div>

      <SwapHorizOutlinedIcon className="walletSwapIcon" />
      <img
        src="/img/cards_bg_line.svg"
        alt=""
        class="ProductCheckoutPage_div_section_area_1_area3_body_card1_bg"
        style={{
          filter: "contrast(0.3)",
        }}
      />
    </div>
  );
};

export default WalletBalanceDisplay;
