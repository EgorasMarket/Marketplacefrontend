import React, { useState, useEffect, useContext, useRef } from "react";
import "./dashBoardReferral.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import TollIcon from "@mui/icons-material/Toll";
import GroupsIcon from "@mui/icons-material/Groups";
import NodataComp from "../../../Components/NoData/NodataComp";
import { numberWithCommas } from "../../../assets/js/numberWithCommas";
import { ShimmerButton } from "react-shimmer-effects-18";
import ErrorModal from "../../../Components/ErrorModal/ErrorModal";
import SuccessModal from "../../../Components/SuccessModal/SuccessModal";
import { Table } from "../../../Components/Tables/TableComp";
import DasboardMember from "./DasboardMember";

const DashboardReferral = () => {
  const [componentLoading, setComponentLoading] = useState(false);
  const [componentLoading2, setComponentLoading2] = useState(true);
  const [componentLoading3, setComponentLoading3] = useState(true);
  const [inactiveReferral, setInactiveReferral] = useState([]);
  const [activeReferrals, setActiveReferrals] = useState([]);
  const [leaderBoard, setLeaderBoard] = useState([]);
  const [myReferrals, setMyReferrals] = useState([]);
  const [Disable, setDisable] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(8);
  const [isLoading2, setIsLoading2] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [successTxt, setSuccessTxt] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const containerRef = useRef(null);
  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied code ";
    tooltip.style.display = "block";
  };
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }

  const scrollToBottom = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.scrollBehavior = "smooth"; // Enable smooth scrolling
      container.scrollTop = container.scrollHeight;
      // Disable smooth scrolling after the animation is complete
      container.addEventListener("scroll", () => {
        container.style.scrollBehavior = "auto";
      });
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [itemsToShow]);

  const displayNextItems = () => {
    setIsLoading2(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 8);
      setIsLoading2(false);
    }, 2000); // Adjust the delay duration as needed (e.g., 1000 milliseconds or 1 second)
  };

  return (
    <section className="ex_section">
      <div className="swapDivCont">
        <div className="pool_deatail_area_member_div">
          <DasboardMember
            refCode={"33g3tgf"}
            componentLoading={componentLoading}
            refAmount={"200"}
          />
        </div>
        <div className="dashBoard_ref_area1">
          <div className="dashBoard_ref_area1_cont1">
            <div className="dashBoard_ref_area1_cont1__cont1_div1">
              <div className="dashBoard_ref_area1_cont1_cont1">
                {" "}
                <div className="dashBoard_ref_area1_cont1_icon_div">
                  <GroupAddIcon className="stackedCoin_icon" />
                </div>
                <div className="dashBoard_ref_area1_cont1_div1 dashBoard_ref_area1_cont1_div1_b">
                  <div className="dashBoard_ref_area1_cont1_div1_1">
                    <div className="dashBoard_ref_area1_cont1_div1_cont1">
                      Active Referral(s)
                    </div>
                    <div className="dashBoard_ref_area1_cont1_div1_cont2">
                      {componentLoading ? (
                        <ShimmerButton size="sm" className="custom_shimmer" />
                      ) : (
                        <>
                          {activeReferrals.length}
                          {"   "}
                          <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                            {" "}
                            ref(s){" "}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashBoard_ref_area1_cont1_cont1">
                <div className="dashBoard_ref_area1_cont1_icon_div">
                  <GroupAddIcon className="stackedCoin_icon" />
                </div>
                <div className="dashBoard_ref_area1_cont1_div1">
                  <div className="dashBoard_ref_area1_cont1_div1_1">
                    <div className="dashBoard_ref_area1_cont1_div1_cont1">
                      Inactive Referral(s)
                    </div>
                    <div className="dashBoard_ref_area1_cont1_div1_cont2">
                      {componentLoading ? (
                        <ShimmerButton size="sm" className="custom_shimmer" />
                      ) : (
                        <>
                          {inactiveReferral.length}{" "}
                          <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                            {" "}
                            ref(s){" "}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashBoard_ref_area1_cont2">
            <div className="dashBoard_ref_area1_cont1_icon_div">
              <GroupAddIcon className="stackedCoin_icon" />
            </div>
            <div className="dashBoard_ref_area1_cont1_div1">
              <div className="dashBoard_ref_area1_cont1_div1_1">
                <div className="dashBoard_ref_area1_cont1_div1_cont1">
                  Total Referrals
                </div>
                <div className="dashBoard_ref_area1_cont1_div1_cont2">
                  {componentLoading ? (
                    <ShimmerButton size="sm" className="custom_shimmer" />
                  ) : (
                    <>
                      {myReferrals.length}{" "}
                      <span className="dashBoard_ref_area1_cont1_div1_cont2_span">
                        {" "}
                        ref(s){" "}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashBoard_ref_area2">
          <div className="dashBoard_ref_area2_cont1">
            <div className="dashBoard_ref_area2_cont1_head">
              <span className="leaderBoard_icon_div">
                <MilitaryTechIcon className="leaderBoard_icon" />
              </span>
              Leader board
            </div>
            <span className="table_hr"></span>
            {componentLoading2 ? (
              <div className="dashBoard_ref_area2_cont1_body">
                <div className="dashBoard_ref_area2_cont1_body_div_head">
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                    Rank
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 ">
                    Username
                  </div>

                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                    Total Referrals
                  </div>
                </div>
                <div
                  className="dashBoard_ref_area2_cont1_body_cont"
                  ref={containerRef}
                >
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>

                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dashBoard_ref_area2_cont1_body">
                <div className="dashBoard_ref_area2_cont1_body_div_head">
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                    Rank
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 ">
                    Username
                  </div>

                  <div className="dashBoard_ref_area2_cont1_body_div_head_cont1 dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                    Total Referrals
                  </div>
                </div>
                <div
                  className="dashBoard_ref_area2_cont1_body_cont"
                  ref={containerRef}
                >
                  {leaderBoard.length <= 0 ? (
                    <div className="no_loans_div">
                      <div className="no_loans_div_cont">
                        <NodataComp />
                      </div>{" "}
                    </div>
                  ) : (
                    leaderBoard
                      .slice(0, itemsToShow)
                      .sort((a, b) => b.refCount - a.refCount)
                      .map((data, index) => (
                        <div
                          className="dashBoard_ref_area2_cont1_body_div1"
                          // id={data.id}
                        >
                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_first">
                            {index == 0 ? (
                              <MilitaryTechIcon
                                style={{ color: "#e0ac01" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : index == 1 ? (
                              <MilitaryTechIcon
                                style={{ color: "#C0C0C0" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : index == 2 ? (
                              <MilitaryTechIcon
                                style={{ color: "#CD7F32" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            ) : (
                              <MilitaryTechIcon
                                style={{ color: "#61607d" }}
                                className="rewardTable_body_row_data_first_icon"
                              />
                            )}
                            {index + 1}
                          </div>
                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 ">
                            @{data.username.slice(0, 4) + "..."}
                          </div>

                          <div className="dashBoard_ref_area2_cont1_body_div1_cont1 dashBoard_ref_area2_cont1_body_div1_cont1_last">
                            {data.refCount} ref(s)
                          </div>
                        </div>
                      ))
                  )}
                </div>
                {itemsToShow < leaderBoard.length && (
                  <button
                    onClick={displayNextItems}
                    className="dashBoard_ref_area2_cont1_body_cont_btn"
                    disabled={isLoading2}
                  >
                    {isLoading2 ? (
                      <ScaleLoader color="#366e51" height={15} />
                    ) : (
                      "  Load More"
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="dashBoard_ref_area2_cont2">
            <div className="dashBoard_ref_area2_cont2_div1">
              <div className="dashBoard_ref_area2_cont1_head">
                <span className="leaderBoard_icon_div">
                  <GroupsIcon className="leaderBoard_icon" />
                </span>
                My Referrals
              </div>
              <span className="table_hr"></span>
              {componentLoading3 ? (
                <div className="dashBoard_ref_area2_cont1_body">
                  <div className="dashBoard_ref_area2_cont1_body_div_head">
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                      Username
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Status
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                  <div className="dashBoard_ref_area2_cont1_body_div1">
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                      <ShimmerButton size="sm" className="custom_shimmer" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="dashBoard_ref_area2_cont1_body">
                  <div className="dashBoard_ref_area2_cont1_body_div_head">
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_first">
                      Username
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Status
                    </div>
                    <div className="dashBoard_ref_area2_cont1_body_div_head_cont1_last">
                      Amount
                    </div>
                  </div>
                  {myReferrals.length <= 0 ? (
                    <div className="no_loans_div">
                      <div className="no_loans_div_cont">
                        <NodataComp />
                      </div>{" "}
                    </div>
                  ) : (
                    myReferrals.slice(0, 5).map((data) => (
                      <div className="dashBoard_ref_area2_cont1_body_div1">
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_first">
                          @{data.username}
                        </div>
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                          {data.status}
                        </div>
                        <div className="dashBoard_ref_area2_cont1_body_div1_cont1_last">
                          {parseFloat(data.amount).toFixed(2)} egax
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
            <div className="dashBoard_ref_area2_cont2_div2">
              <div className="dashBoard_ref_area2_cont2_div2_head">
                Copy your referral code and invite friends to earn more.
              </div>
              <input
                type="text"
                value={"364738g"}
                className="referral_default_value"
                id="myInput"
              />
              <div className="refferal_copy_btns">
                <button
                  className="ref_btn"
                  onClick={copyText}
                  onMouseOut={outFunc}
                  disabled={Disable}
                >
                  Copy referral code
                  <span className="tooltiptext" id="myTooltip"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background_gradient-parent">
        <div class="background_gradient"></div>
      </div>
      <img
        src="/img/dark_home_sec_bg.svg"
        alt=""
        className="home_div_section1_bg"
      />
      {successModal ? (
        <SuccessModal
          SuccesTxt={successTxt}
          successFunc={() => {
            window.location.href = "/dashboard/wallet";
          }}
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
    </section>
  );
};

export default DashboardReferral;
