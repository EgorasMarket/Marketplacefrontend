import React from "react";
import "./header.css";

const Header = () => {
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
            <a href="/login">
              <button className="Header_div_area_div2_btn1">Login</button>
            </a>
            <a href="/register">
              <button className="Header_div_area_div2_btn2">Get started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
