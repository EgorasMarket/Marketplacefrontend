import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ToastContainer, toast } from "react-toastify";
import ErrorModal from "../../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";
import { numberWithCommas } from "../../../assets/js/numberWithCommas";
import { useMutation } from "@tanstack/react-query";
import { SEND_CRYPTO_EXTERNAL } from "../../../Services/userServices";

const SendUsdExternal = ({ ToggleEgcBlockchainWithdrawModal, balance }) => {
  const [successModal, setSuccessModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [payload, setPayload] = useState({
    symbol: "EGAX",
    username_email: "",
    amount: "",
    type: "external_send",
    network: "Egochain",
    wallet_address: "",
  });

  const { mutate: sendExternal, isPending: loading } = useMutation({
    mutationFn: async (payload) => {
      const res = await SEND_CRYPTO_EXTERNAL(payload);
      console.log(res, "external withdrawal");
    },
  });
  const sendFunds = async () => {
    if (payload.wallet_address === "" || payload.amount === "") return;
    await sendExternal(payload);
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
              Send EGAX
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
                    src="/img/egax_logo.png"
                    alt=""
                    className="depositMoneyDiv_cont_body_input_div_div_cont1_img"
                  />
                  Egochain
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
                <div className="availegc_bal_div_amount">
                  {numberWithCommas(parseFloat(balance).toFixed(2))} Egax
                </div>
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
                  Minimum single withdrawal amount: 0.1 Egax
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Maximum single withdrawal amount: 2,000 Egax
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Make sure the the receiver's wallet is a EGO20 wallet
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
