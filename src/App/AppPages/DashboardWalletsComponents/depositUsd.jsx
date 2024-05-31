import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { QRCode } from "react-qrcode-logo";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import getUserInfo from "../../../helper/userhelper";
const DepositUsd = ({ ToggleEgcBlockchainDepositModal }) => {
  const [loading, setLoading] = useState(true);
  const [payload, setPayload] = useState({
    address: "",
    message: "",
  });

  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied address ";
    tooltip.style.display = "block";
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_cont">
        <ArrowBackOutlinedIcon
          className="depositMoneyDiv_icon"
          onClick={ToggleEgcBlockchainDepositModal}
        />
        <div className="depositMoneyDiv_cont_1">
          <div className="depositMoneyDiv_cont_title_cont">
            <div className="depositMoneyDiv_cont_title_cont_title">
              Deposit USDT
            </div>
            <div className="depositMoneyDiv_cont_title_cont_para">
              Add funds directly from a blockchain account
            </div>
          </div>
          <div className="depositMoneyDiv_cont_body">
            <div className="depositMoneyDiv_cont_body_input_div">
              <div className="depositMoneyDiv_cont_body_input_div_title">
                Coin:
              </div>
              <div className="depositMoneyDiv_cont_body_input_div_div">
                <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                  <img
                    src="/img/egax_logo.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  EGAX
                </div>
                <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                  EGAX
                </div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_input_div2">
              <div className="depositMoneyDiv_cont_body_input_div_title">
                Network:
              </div>
              <div className="depositMoneyDiv_cont_body_input_div_div">
                <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                  <img
                    src="/img/egax_logo.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  EGOCHAIN
                </div>
                <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                  EGO20
                </div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_qr_div">
              <QRCode
                value={getUserInfo().wallet_address}
                quietZone={5}
                eyeColor="#fff"
                bgColor="#161619"
                fgColor="#fff"
                logoImage="/img/egax_logo.png"
                eyeRadius={[
                  [5, 5, 0, 5],
                  [5, 5, 5, 0],
                  [5, 0, 5, 5],
                ]}
                removeQrCodeBehindLogo={true}
                // logoPadding={5}
                // logoWidth={15}
                logoPaddingStyle="circle"
                className="depositMoneyDiv_cont_body_qr_div_qr"
              />
              <div className="depositMoneyDiv_cont_body_qr_div_txt">
                Scan Qrcode or copy wallet address to make payment
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_div">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                WalletAddress:
              </div>

              <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                <input
                  type="text"
                  value={getUserInfo().wallet_address}
                  className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                  id="myInput"
                />
                <button
                  className="depositMoneyDiv_cont_body_wallet_addr_div_btn"
                  onClick={copyText}
                  onMouseOut={outFunc}
                >
                  Copy
                  <ContentCopyOutlinedIcon className="depositMoneyDiv_cont_body_wallet_addr_div_btn_icon" />
                  <span className="tooltiptext" id="myTooltip"></span>
                </button>
              </div>
            </div>

            <div className="depositMoneyDiv_cont_body_tips_div">
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Send only EGAX to this deposit address
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Ensure the network is EGOCHAIN (EGO20)
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Do not send Nfts to this address
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="depositMoneyDiv_cont_2">
          <button
            className="depositMoneyDiv_cont_2_btn"
            onClick={ToggleEgcBlockchainDepositModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositUsd;
