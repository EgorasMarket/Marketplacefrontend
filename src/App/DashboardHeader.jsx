import React, { useState, useEffect } from "react";
import "./AppStyles/DashboardHeader.css";

import { Avatar } from "modern-react-avatar";
import "modern-react-avatar/dist/index.css";
// import CloseIcon from "@mui/icons-material/Close";
import { Notification03Icon } from "hugeicons-react";
import { Copy01Icon } from "hugeicons-react";

const DashboardHeader = ({ currentPathName, routes, activeRoute }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const [headerMenu, setHeaderMenu] = useState(false);
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
    <div className="DashboardHeader">
      <div className="DashboardHeader_area">
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
        <div className="DashboardHeader_area_links">
          {routes
            .filter((data) => data.layout === "/app")
            .map((data) => (
              <>
                {data.name === "ProductDetail" ? null : data.name ===
                  "Checkout" ? null : (
                  <a
                    href={`${data.layout}/${data.path}`}
                    onclick={ToglleActiveLink}
                    id={data.name}
                    className={
                      activeLink === data.name
                        ? "DashboardNav_body_1_active"
                        : "DashboardNav_body_1"
                    }
                  >
                    {/* <div className="DashboardHeader_area_links_link1_div"> */}
                    <div className="DashboardHeader_area_links_link1_div_head">
                      {data.icon}
                    </div>
                    <div className="DashboardHeader_area_links_link1_div_head">
                      {data.name} {data.name == "Earn" ? "🔥" : null}
                    </div>
                    {/* </div> */}
                  </a>
                )}
              </>
            ))}
        </div>
        <div className="DashboardHeader_area_2">
          <div className="DashboardHeader_area_2_cont1">
            <Notification03Icon className="DashboardHeader_area_2_cont1_icon" />
          </div>
          <div className="wallet_address_header_Div">
            0x3d...4e3d{" "}
            <Copy01Icon className="wallet_address_header_Div_icon1" size={20} />
          </div>
          {/* <div className="DashboardHeader_area_2_cont1">
            <Notification03Icon className="DashboardHeader_area_2_cont1_icon" />
          </div> */}
          <div className="DashboardHeader_area_2_cont2">
            <div className="DashboardHeader_area_2_cont2_cont1">
              <Avatar
                name={"samuel ifeanyi"}
                size="small"
                className="DashboardHeader_area_2_cont2_cont1_avatar"
              />
            </div>
            {/* <div className="DashboardHeader_area_2_cont2_cont2">
              <div className="DashboardHeader_area_2_cont2_cont2_div1">
                Samuel ify
              </div>
              <div className="DashboardHeader_area_2_cont2_cont2_div2">
                @cyntax
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
