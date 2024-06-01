import React, { useState, useEffect, useRef } from "react";
import "./AppStyles/DashboardHeader.css";

import { Avatar } from "modern-react-avatar";
import "modern-react-avatar/dist/index.css";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { Logout05Icon } from "hugeicons-react";
// import CloseIcon from "@mui/icons-material/Close";
import { Notification03Icon } from "hugeicons-react";
import { Copy01Icon } from "hugeicons-react";
import getUserInfo from "../helper/userhelper";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";
import { getUserMainInfo } from "../hooks/useGetUserInfo";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/queryKeys";
const DashboardHeader = ({ routes, activeRoute }) => {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const [activeLink, setActiveLink] = useState("Home");
  const [headerMenu, setHeaderMenu] = useState(false);

  const [settingsMenu, setSettingsMenu] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    // Function to handle click events
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setSettingsMenu(false);
      }
    };

    // Add the event listener
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const ToglleActiveLink = (e) => {
    let id = e.currentTarget.id;
    setActiveLink(id);
  };
  console.log(activeLink);
  useEffect(() => {
    console.log(activeRoute);
    if (activeRoute) {
      setActiveLink(activeRoute);
      return;
    }
  }, [activeRoute]);
  const ToggleSettingsMenu = () => {
    setSettingsMenu(!settingsMenu);
  };
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
            Egoearn
          </div>
        </div>
        <div className="DashboardHeader_area_links">
          {routes
            .filter((data) => data.layout === "/app")
            .slice(0, 6)
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
          <div className="more_div" ref={divRef} onClick={ToggleSettingsMenu}>
            <MoreHorizontalCircle01Icon
              size={24}
              className={
                activeLink == " Orders" ||
                activeLink == " Transactions" ||
                activeLink == " Referral"
                  ? "DashboardNav_body_1_icon_more_active"
                  : "DashboardNav_body_1_icon_more"
              }
            />
            {settingsMenu ? (
              <div className="more_links_div">
                {routes
                  .filter((data) => data.layout === "/app")
                  .slice(6)
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
            ) : null}
            {/* More */}
          </div>
        </div>
        <div className="DashboardHeader_area_2">
          {/* <div className="DashboardHeader_area_2_cont1">
            <Notification03Icon className="DashboardHeader_area_2_cont1_icon" />
          </div> */}
          <div className="wallet_address_header_Div">
            {/* {`${getUserInfo()?.wallet_address.slice( */}
            {`${getUserMainInfo()?.wallet_address.slice(
              0,
              4
            )}...${getUserMainInfo()?.wallet_address.slice(38, 42)}`}
            <Copy01Icon className="wallet_address_header_Div_icon1" size={20} />
          </div>
          {/* <div className="DashboardHeader_area_2_cont1">
            <Notification03Icon className="DashboardHeader_area_2_cont1_icon" />
          </div> */}
          <div
            className="DashboardHeader_area_2_cont1"
            onClick={() => {
              localStorage.removeItem("x-token");
              window.location.href = "/login";
              // queryClient.setQueryData([QUERY_KEY.user], null);
            }}
          >
            <Logout05Icon className="DashboardHeader_area_2_cont1_icon" />
          </div>
          <div className="DashboardHeader_area_2_cont2">
            <div className="DashboardHeader_area_2_cont2_cont1">
              <Avatar
                name={getUserMainInfo()?.username}
                // name={getUserInfo().username}
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
