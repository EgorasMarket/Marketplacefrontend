import React, { useState, useEffect, useRef } from "react";

import { Avatar } from "modern-react-avatar";
import "modern-react-avatar/dist/index.css";
import { MoreHorizontalCircle01Icon } from "hugeicons-react";
import { Coins01Icon } from "hugeicons-react";
// import CloseIcon from "@mui/icons-material/Close";
import { Notification03Icon } from "hugeicons-react";
import { Copy01Icon } from "hugeicons-react";
import getUserInfo from "../helper/userhelper";
const DashboardMobileNav = ({ routes, activeRoute }) => {
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
    <div className="dashboardMobileNav">
      <a href="/app/earn" className="sticky_div_mobile">
        {" "}
        <Coins01Icon size={24} className="DashboardNav_body_1_icon" />
      </a>
      {routes
        .filter((data) => data.layout === "/app")
        .slice(0, 6)
        .map((data) => (
          <>
            {data.name === "ProductDetail" ? null : data.name ===
              "Checkout" ? null : (
              <>
                <a
                  href={`${data.layout}/${data.path}`}
                  onclick={ToglleActiveLink}
                  id={data.name}
                  className={
                    activeLink === data.name
                      ? "DashboardNav_body_1_active"
                      : "DashboardNav_body_1"
                  }
                  style={{
                    visibility: data.name === "Earn" ? "hidden" : "visible",
                  }}
                >
                  {/* <div className="DashboardHeader_area_links_link1_div"> */}
                  <div className="DashboardHeader_area_links_link1_div_head_iocn">
                    {data.icon}
                  </div>
                  <div className="DashboardHeader_area_links_link1_div_head">
                    {data.name}
                  </div>
                  {/* </div> */}
                </a>
              </>
            )}
          </>
        ))}

      <div className="more_div" ref={divRef} onClick={ToggleSettingsMenu}>
        <MoreHorizontalCircle01Icon
          size={34}
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
              .slice(0)
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
  );
};

export default DashboardMobileNav;
