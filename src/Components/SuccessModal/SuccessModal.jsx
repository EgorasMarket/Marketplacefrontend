import React from "react";
import successLoader from "../../assets/icons/LottieSuccess.json";
import "./successModal.css";
import Lottie from "lottie-react";
const SuccessModal = ({ SuccesTxt, successFunc, order_btn, successFunc2 }) => {
  return (
    <div className="successModalDiv">
      <div className="successModalDiv_cont">
        <div className="successModalDiv_cont_animation">
          <Lottie
            animationData={successLoader}
            loop={false}
            autoPlay={true}
            className="successModalDiv_cont_animation_icon"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
        <div className="successModalDiv_cont_body">
          <div className="successModalDiv_cont_body_title">Success</div>
          <div className="successModalDiv_cont_body_para">{SuccesTxt}</div>
        </div>
        <div className="successModalDiv_cont_button_div">
          {order_btn == true ? (
            <button
              className="successModalDiv_cont_button2"
              onClick={successFunc2}
            >
              View Orders
            </button>
          ) : null}

          <button className="successModalDiv_cont_button" onClick={successFunc}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
