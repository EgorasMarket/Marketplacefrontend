import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import DashboardSideBar from "./DashboardSideBar";
import DashboardHeader from "./DashboardHeader";
import "./AppStyles/Dashboard.css";
import "./AppStyles/event.css";

const Dashboard = () => {
  const [currentRoute, setCurrentRoute] = useState("Home");

  const currentPathname = location.pathname;
  useEffect(() => {
    const currentRoute = routes.find(
      (data) => `${data.layout}/${data.path}` === currentPathname
    );
    if (currentRoute) {
      //// console.logog(currentRoute.name);
      setCurrentRoute(currentRoute.name);
    }
  }, [currentPathname]);
  const getRoutes = (routes) => {
    return routes.map((data, key) => {
      if (data.layout === "/app") {
        return (
          <Route
            path={`/app/${data.path}`}
            element={data.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="event_div">
      {" "}
      <section className="event_comp">
        <div className="event_div_area">
          <DashboardHeader currentPathName={currentRoute} routes={routes} />
          <div className="event_div_area_body">
            <Routes>{getRoutes(routes)}</Routes>
          </div>
        </div>

        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />

        {/* <Grid /> */}
        <img
          src="/img/dummy_color_img.jpeg"
          alt=""
          className="grains_ellipse"
        />
      </section>
    </div>
    // <div className="Dashboard">
    //   <div className="Dashboard_body_area_1">
    //     <DashboardSideBar routes={routes} activeRoute={currentRoute} />
    //   </div>
    //   <div className="Dashboard_body_area">
    //     <DashboardHeader currentPathName={currentRoute} />
    //     <div className="Dashboard_body">
    //       <Routes>{getRoutes(routes)}</Routes>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dashboard;
