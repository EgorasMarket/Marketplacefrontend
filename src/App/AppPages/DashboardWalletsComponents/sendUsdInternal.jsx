import React, { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ScaleLoader from "react-spinners/ScaleLoader";
import { numberWithCommas } from "../../../assets/js/numberWithCommas";
import { USERNAME_EMAIL_IS_VALID } from "../../../Services/TransactionServices";
import { ToastContainer, toast } from "react-toastify";
import ErrorModal from "../../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";
import { SEND_CRYPTO_FUNDS_INTERNAL } from "../../../Services/TransactionServices";
const SendUsdInternal = ({ ToggleEgcUserWithdrawtModal, balance }) => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");
  const [pinModal, setPinModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [fetchingUser, setFetchingUser] = useState(false);
  const [hasUser, setHasUser] = useState(false);
  const [hasUserSuccess, setHasUserSuccess] = useState(false);
  const [hasUserError, setHasUserError] = useState(false);
  const [beneficiaryData, setBeneficiaryData] = useState({});

  const [payload, setPayload] = useState({
    symbol: "EGAX",
    username_email: "",
    amount: "",
    type: "internal_send",
  });

  const sendFunds = async () => {
    setLoading(true);
    const response = await SEND_CRYPTO_FUNDS_INTERNAL({
      ...payload,
      pin_code: pin,
    });
    // console.log(response);

    if (response.success) {
      setSuccessMsg("Transaction succesful");
      setSuccessModal(true);
      setLoading(false);
      return;
    }
    if (!response.success) {
      toast.error(response.data.errorMessage);
      setLoading(false);

      return;
    }
  };

  const handleOnChange = async (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload, [id]: value });
    console.log("====================================");
    console.log(value);
    console.log("====================================");
    if (id === "amount") {
      return;
    }
    setBeneficiaryData("");
    setHasUser(false);
    if (e.target.value === "") {
      setFetchingUser(false);
      setHasUserError(false);
      setHasUserSuccess(false);
    } else {
      setFetchingUser(true);
      setHasUserError(false);
      setHasUserSuccess(false);

      const data = {
        username_email: value,
        type: "username_email",
      };

      const resp = await USERNAME_EMAIL_IS_VALID(data);
      setFetchingUser(false);
      console.log(resp);
      if (resp.data.success === false) {
        setHasUser(false);
        setBeneficiaryData("");
        setHasUserError(true);
        setHasUserSuccess(false);
        return;
      }
      setHasUserError(false);
      setHasUserSuccess(true);
      setHasUser(true);
      setBeneficiaryData(resp.data);
    }
  };
  const AddMax = () => {
    setPayload({ amount: balance });
  };
  return (
    <div className="depositMoneyDiv">
      <div className="depositMoneyDiv_cont">
        <ArrowBackOutlinedIcon
          className="depositMoneyDiv_icon"
          onClick={ToggleEgcUserWithdrawtModal}
        />
        <div className="depositMoneyDiv_cont_1">
          <div className="depositMoneyDiv_cont_title_cont">
            <div className="depositMoneyDiv_cont_title_cont_title">
              Send EGAX
            </div>
            <div className="depositMoneyDiv_cont_title_cont_para">
              Send funds directly to an egoras user
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
                  {payload.symbol}
                </div>
              </div>
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Recipient Email or Username:
              </div>
              <div className="depositMoneyDiv_cont_body_wallet_addr_divb_input_div">
                <input
                  type="text"
                  id="username_email"
                  value={payload.username_email}
                  onChange={handleOnChange}
                  placeholder="@John Doe"
                  // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                  className="depositMoneyDiv_cont_body_wallet_addr_div_input"
                />
                {fetchingUser && (
                  <div className="userNameLoader">
                    <ScaleLoader color="#366e51" height={20} />
                  </div>
                )}
                {hasUserSuccess && (
                  <div className="userNameLoader2">
                    <img
                      src="/img/checked_icon.png"
                      alt=""
                      className="userNameLoader_img"
                    />
                  </div>
                )}
                {hasUserError && (
                  <div className="userNameLoader2">
                    <img
                      src="/img/error_icon.png"
                      alt=""
                      className="userNameLoader_img"
                    />
                  </div>
                )}
              </div>

              {hasUser === true ? (
                <div className="userNameLoaded_div">
                  <p className="userNameLoaded_div_para">
                    fullname: {beneficiaryData?.firstName}
                  </p>
                  <p className="userNameLoaded_div_para">
                    Email: {beneficiaryData?.email}
                  </p>
                  <p className="userNameLoaded_div_para">
                    Phone Number: {beneficiaryData?.phone}
                  </p>
                </div>
              ) : null}
            </div>
            <div className="depositMoneyDiv_cont_body_wallet_addr_divb">
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_title">
                Withdrawal Amount:
              </div>
              <div className="depositMoneyDiv_cont_body_wallet_addr_div_input_div">
                <input
                  type="number"
                  placeholder="0.00"
                  id="amount"
                  // value={"0x3dE79168402278C0DA2Bf9A209C3A91d755790FC"}
                  value={payload.amount}
                  onChange={handleOnChange}
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
                  {" "}
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
                  Minimum single withdrawal amount: 0.1 egax
                </div>
              </div>
              <div className="depositMoneyDiv_cont_body_tips_div_1">
                <InfoOutlinedIcon className="depositMoneyDiv_cont_body_tips_div_1_icon" />
                <div className="depositMoneyDiv_cont_body_tips_div_1_txt">
                  Maximum single withdrawal amount: 2,000 egax
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="depositMoneyDiv_cont_2">
          {loading ? (
            <button className="depositMoneyDiv_cont_2_btn">
              <ScaleLoader color="#366e51" height={20} />
            </button>
          ) : (
            <button className="depositMoneyDiv_cont_2_btn" onClick={sendFunds}>
              Send funds
            </button>
          )}
        </div>

        {successModal ? (
          <SuccessModal
            SuccesTxt={successMsg}
            successFunc={() => {
              window.location.href = "/app/wallet";
            }}
          />
        ) : null}
      </div>

      <ToastContainer />
    </div>
  );
};

export default SendUsdInternal;
