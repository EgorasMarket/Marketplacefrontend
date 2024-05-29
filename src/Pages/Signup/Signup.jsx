import React, { useEffect, useState } from "react";

import "./signupLogin.css";
import Select from "react-select";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/plain.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import PulseLoader from "react-spinners/PulseLoader";

// import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";
// import SuccessModal from "../../components/SuccessModal/SuccessModal";
// import ErrorModal from "../../components/ErrorModal/ErrorModal";
// import { RESEND_SMS_OTP } from "../../services/auth";
// import { registerUser } from "../../features/auth/authActions";
// import { setPayload } from "../../features/auth/authSlice";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useMutation } from "@tanstack/react-query";
import { REGISTER } from "../../Services/auth.services";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import ErrorModal from "../../Components/ErrorModal/ErrorModal";
// dummySelectData;
const Signup = () => {
  // const dispatch = useDispatch();
  // const { payload, loading, error } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [mismatched, setMismatched] = useState(false);
  const [payload, setPayload] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    countrycode: "",
    referral: "",
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "register",
    mutationFn: async (payload) => {
      const res = await REGISTER(payload);
      return res;
    },
    onSuccess: (data) => {
      console.log(data, "alal");
      if (data.code === 200) {
        setSuccess(true);
        return;
      }
      if (data.status !== 200) {
        setErrorModal(true);
        setErrorTxt(data.data.errorMessage);
        return;
      }
    },
  });

  const register = async () => {
    console.log("april");
    await mutate(payload);
  };
  const changeInputData = (e) => {
    const { value, id } = e.target;

    setPayload({
      ...payload,

      [id]: value,
    });
  };
  useEffect(() => {
    if (isPending) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [isPending]);
  return (
    <div className="signup_div">
      <section className="signup_div_section">
        <div className="custom_container">
          <div className="signup_div_section_div">
            <div className="signup_div_section_div_title" onClick={register}>
              Create an Account
            </div>

            <div className="signup_div_section_div_container_form_cont">
              <div className="signup_div_section_div_container_form">
                <label
                  htmlFor="email"
                  className="signup_div_section_div_container_form_label"
                >
                  *Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="signup_div_section_div_container_form_input"
                  value={payload.email}
                  onChange={changeInputData}
                  // autoComplete="off"
                />

                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="username"
                  className="signup_div_section_div_container_form_label"
                  style={{ display: "none" }}
                >
                  *User Name:
                </label>
                <input
                  id="dyey"
                  type="text"
                  value
                  name="userName"
                  className="signup_div_section_div_container_form_input"
                  // onChange={handleOnChange}
                  // autoComplete="on"
                  style={{ display: "none" }}
                />
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="password"
                  className="signup_div_section_div_container_form_label"
                >
                  *Password:
                </label>

                <div className="password_div">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={payload.password}
                    onChange={changeInputData}
                    name="password"
                    className="signup_div_section_div_container_form_input_pasowrd"
                    // onChange={handleOnChange}
                    autoComplete="off"
                  />
                  {passwordVisible ? (
                    <VisibilityOffIcon
                      onClick={togglePasswordVisibility}
                      className="otp_modal_container_body_icon2"
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={togglePasswordVisibility}
                      className="otp_modal_container_body_icon2"
                    />
                  )}
                </div>
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="password"
                  className="signup_div_section_div_container_form_label"
                >
                  *Confirm Password:
                </label>

                <div className="password_div">
                  <input
                    type={passwordVisible2 ? "text" : "password"}
                    id="confirm"
                    // value={payload.confirm}
                    name="confirm"
                    className="signup_div_section_div_container_form_input_pasowrd"
                    // onChange={handleOnChange}
                    autoComplete="off"
                  />
                  {mismatched ? (
                    <div className="password_mismatch_div">
                      Passowrd does not match!
                    </div>
                  ) : null}
                </div>
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="username"
                  className="signup_div_section_div_container_form_label"
                >
                  *User Name:
                </label>
                <input
                  id="username"
                  type="text"
                  value={payload.username}
                  onChange={changeInputData}
                  name="userName"
                  className="signup_div_section_div_container_form_input"
                  // onChange={handleOnChange}
                  autoComplete="off"
                />

                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="referral"
                  className="signup_div_section_div_container_form_label"
                >
                  Phone Number:
                </label>
                {/* <input
                  id="referral"
                  type="text"
                  // value={payload.referral}
                  name="userName"
                  className="signup_div_section_div_container_form_input"
                  // onChange={handleOnChange}
                  autoComplete="off"
                  style={{ marginBottom: "5px" }}
                /> */}
                <PhoneInput
                  id="phoneNumber"
                  defaultCountry="ng"
                  value={payload.phone}
                  onChange={(value, code) => {
                    setPayload({
                      ...payload,
                      countrycode: code.country.dialCode,
                      phone: code.inputValue,
                    });
                    // console.log("====================================");
                    // console.log(code, value, code.inputValue);
                    // console.log("====================================");
                  }}
                  // value={phone}
                  // onChange={(phone) => setPhone(phone)}
                  // className="signup_div_section_div_container_form_input"
                />
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <label
                  htmlFor="referral"
                  className="signup_div_section_div_container_form_label"
                >
                  Referral Code:
                </label>
                <input
                  id="referral"
                  type="text"
                  value={payload.referral}
                  onChange={changeInputData}
                  name="referral"
                  className="signup_div_section_div_container_form_input"
                  // onChange={handleOnChange}
                  autoComplete="off"
                />
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                {/* ============ */}
                <button
                  className="signup_div_section_div_container_form_btn"
                  onClick={register}
                  disabled={disable}

                  // disabled={submitDisable}
                >
                  {isPending ? (
                    <>
                      <PulseLoader color="#fff" height={20} />
                    </>
                  ) : (
                    " Create Account"
                  )}
                </button>
              </div>
            </div>

            <div className="signup_div_section_div_para">
              Already have an acccount?{"   "}
              <a href="/login" className="signup_div_section_div_para_link">
                Login
              </a>
            </div>
          </div>
        </div>
        <img src="/img/login_bg.jpeg" alt="" className="signup_div_bg" />
      </section>
      {/* {otpModal ? (
        <OtpModal
          handleChange={handleChange}
          otp={otp}
          handleVerifyOtp={handleVerifyOtp}
          payload={payload}
          otpDisable={otpDisable}
          otpLoading={otpLoading}
          resendOtp={handleSignUpResend}
        />
      ) : null} */}
      {/* {success ? (
        <SuccessModal
          SuccesTxt={successTxt}
          successFunc={() => {
            window.location.href = "/login";
          }}
          txnHashDiv={false}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null} */}
      {success ? (
        <SuccessModal
          SuccesTxt={"You have successfully Signed up"}
          successFunc={() => (window.location.href = "/login")}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Signup;
