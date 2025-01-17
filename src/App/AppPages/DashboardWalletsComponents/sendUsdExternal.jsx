import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ToastContainer, toast } from "react-toastify";
import ErrorModal from "../../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";

const SendUsdExternal = ({ ToggleEgcBlockchainWithdrawModal, balance }) => {
  const [loading, setLoading] = useState(false);
  const [pinModal, setPinModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [pin, setPin] = useState("");

  const [payload, setPayload] = useState({
    symbol: "EGAX",
    username_email: "",
    amount: "",
    type: "external_send",
    network: "Egochain",
    wallet_address: "",
  });

  const sendFunds = async () => {
    alert("sent");
  };

  // const processSend = () => {
  //   const { wallet_address, amount } = payload;
  //   ///do simple validation

  //   if (wallet_address === "" || amount === "") {
  //     toast.warn("Some fields are empty");
  //     return;
  //   }
  //   setPinModal(true);
  // };

  const handleOnChange = (e) => {
    const { id, value } = e.target;

    setPayload({ ...payload, [id]: value });
  };
  const AddMax = () => {
    setPayload({ amount: balance });
  };
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_cont">
        <ArrowBackOutlinedIcon
          className="depositMoneyDiv_icon"
          onClick={ToggleEgcBlockchainWithdrawModal}
        />
        <div className="depositMoneyDiv_cont_1">
          <div className="depositMoneyDiv_cont_title_cont">
            <div className="depositMoneyDiv_cont_title_cont_title">
              Send USDT
            </div>
            <div className="depositMoneyDiv_cont_title_cont_para">
              Send funds directly to a blockchain account
            </div>
          </div>
          <div className="depositMoneyDiv_cont_body">
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                WalletAddress:
              </div>
              <input
                type="text"
                placeholder="0xXXXXXXXXXXXXXXX"
                id="wallet_address"
                // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                value={payload.wallet_address}
                onChange={handleOnChange}
                className="depositMoneyDiv_cont_body_wallet_addr_div_input"
              />
            </div>
            <div className="depositMoneyDiv_cont_body_input_div2">
              <div className="depositMoneyDiv_cont_body_input_div_title">
                Network:
              </div>
              <div className="depositMoneyDiv_cont_body_input_div_div">
                <div className="depositMoneyDiv_cont_body_input_div_div_cont1">
                  <img
                    src="/img/bsc_icon.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  Binance Smart Chain
                </div>
                <div className="depositMoneyDiv_cont_body_input_div_div_cont2">
                  {payload.network}
                </div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Withdrawal Amount:
              </div>
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                <input
                  type="number"
                  id="amount"
                  placeholder="0.00"
                  value={payload.amount}
                  onChange={handleOnChange}
                  // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                  className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                />
                <button
                  className="depositMoneyDiv_cont_body_wallet_addr_div_btn"
                  onClick={AddMax}
                >
                  Max
                </button>
              </div>
              <div className="availegc_bal_div">
                <div className="availegc_bal_div_title">Available</div>
                <div className="availegc_bal_div_amount">{balance} USD</div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Withdrawal Remarks (optional):
              </div>
              <input
                type="text"
                // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                className="depositMoneyDiv_cont_body_wallet_addr_div_input"
              />
            </div>

            <div className="depositMoneyDiv_cont_body_tips_divb">
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Minimum single withdrawal amount: 10 usd
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Maximum single withdrawal amount: 2,000,000 usd
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Make sure the the receiver's wallet is a bep20 wallet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="depositMoneyDiv_cont_2">
          {loading ? (
            <p>Loading ..</p>
          ) : (
            <button className="depositMoneyDiv_cont_2_btn" onClick={sendFunds}>
              Send Funds
            </button>
          )}
        </div>

        {successModal ? (
          <SuccessModal
            SuccesTxt={successMsg}
            successFunc={() => {
              window.location.href = "/dashboard/transaction";
            }}
          />
        ) : null}
      </div>

      <ToastContainer />
    </div>
  );
};

export default SendUsdExternal;
