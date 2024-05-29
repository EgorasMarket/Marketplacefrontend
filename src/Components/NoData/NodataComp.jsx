import React from "react";
import LottieNoData from "../../assets/icons/LottieNodata.json";

import Lottie from "lottie-react";
import "./NodataComp.css";
const NodataComp = () => {
  return (
    <div className="NodataCompDiv">
      <div className="NodataCompDiv_cont">
        <div className="NodataCompDiv_cont_icon">
          <Lottie
            animationData={LottieNoData}
            loop={true}
            autoPlay={true}
            className="NodataCompDiv_cont_icon_iocn"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
        <div className="NodataCompDiv_cont_txt">No data available</div>
      </div>
    </div>
  );
};

export default NodataComp;
