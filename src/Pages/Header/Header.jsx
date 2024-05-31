import React, { useState, useEffect } from "react";
import "./header.css";
import { Menu11Icon } from "hugeicons-react";
import { Cancel01Icon } from "hugeicons-react";

const Header = () => {
  const [headerMenu, setHeaderMenu] = useState(false);
  const toggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };
  return (
    <div className="Header_div">
      <div className="Header_div_container">
        <div className="Header_div_area">
          <a href="/" className="Header_div_area_div1">
            <img
              src="/img/egax_logo.png"
              alt=""
              className="Header_div_area_div1_img"
            />
            Egoearn
          </a>
          <div className="Header_div_area_div2">
            <a href="#how_to" className="Header_div_area_div2_link">
              How to earn
            </a>
            <a href="/app/market" className="Header_div_area_div2_link">
              Marketplace
            </a>
            <a href="/login" className="Header_div_area_div2_btn1_link">
              <button className="Header_div_area_div2_btn1">Login</button>
            </a>
            <a href="/register" className="Header_div_area_div2_btn1_link">
              <button className="Header_div_area_div2_btn2">Get started</button>
            </a>
            {headerMenu ? (
              <Cancel01Icon
                size={32}
                className="mobile_menu_icon"
                onClick={toggleHeaderMenu}
              />
            ) : (
              <Menu11Icon
                size={32}
                className="mobile_menu_icon"
                onClick={toggleHeaderMenu}
              />
            )}
          </div>
        </div>
        {headerMenu ? (
          <div className="Header_mobile_div">
            <a href="#how_to">
              <div className="Header_div_link1">How to earn</div>
            </a>{" "}
            <a href="/app/market">
              <div className="Header_div_link1">Marketplace</div>
            </a>{" "}
            <div className="Header_div_btn_divs">
              <a href="/login">
                <button className="Header_div_btn1">Login</button>
              </a>
              <a href="/register">
                <button className="Header_div_btn2">Get started</button>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
