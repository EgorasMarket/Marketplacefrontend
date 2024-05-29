import React, { useEffect, useState } from "react";
import "./AppStyles/DashboardNav.css";
import { Link, useNavigate } from "react-router-dom";
import { Logout04Icon } from "hugeicons-react";

const DashboardSideBar = ({ routes, activeRoute }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  //   const [isVibrationSupported, setIsVibrationSupported] = useState(
  //     "vibrate" in navigator
  //   );

  //   function handleButtonClick() {
  //     if (isVibrationSupported) {
  //       navigator.vibrate(100);
  //     }
  //   }
  const ToglleActiveLink = (e) => {
    let id = e.currentTarget.id;
    setActiveLink(id);
  };
  useEffect(() => {
    if (activeRoute) {
      setActiveLink(activeRoute);
    }
    //// console.logog(activeLink, activeRoute);
  }, [activeRoute]);

  return (
    <div className="event_sideBar_div">
      <div className="event_sideBar_div_area">
        <div className="event_sideBar_div_area_1">
          <div className="event_sideBar_div_area_1_area">
            <img
              src="/img/egax_logo.png"
              alt=""
              className="event_sideBar_div_area_1_logo"
            />
            Ego404
          </div>
        </div>
        <div className="event_sideBar_div_area_body">
          {routes
            .filter((data) => data.layout === "/app")
            .map((data) => (
              <>
                {data.name === "ProductDetail" ? null : data.name ===
                  "Checkout" ? null : (
                  <a href={`${data.layout}/${data.path}`}>
                    <div
                      id={data.name}
                      className={
                        activeLink === data.name
                          ? "DashboardNav_body_1_active"
                          : "DashboardNav_body_1"
                      }
                      onClick={ToglleActiveLink}
                    >
                      {data.icon}
                      <div className="DashboardNav_body_1_txt_div">
                        <div className="DashboardNav_body_1_txt">
                          {data.name}
                        </div>
                        {data.name == "Ego SalesPro" ? (
                          <span class="Ping -top-1">
                            <span class="c-flashingPart"></span>
                            <span class="c-basePart"></span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </a>
                )}
              </>
            ))}
        </div>
        <div className="event_sideBar_div_area_last_div">
          <div className="logout_divs">
            <div className="event_sideBar_div_area_last_div_cont1_address">
              {/* <Blockies
                  seed={localStorage.getItem("wallet")}
                  size={8}
                  scale={4}
                  className="blockies_icon"
                />{" "}
                {`${localStorage.getItem("wallet").slice(0, 4)}...${localStorage
                  .getItem("wallet")
                  .slice(38, 42)}`} */}
              0x34d...3344
            </div>
            <Logout04Icon
              className="header_div_area_cont3_div2_icon"
              style={{ color: "red" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
