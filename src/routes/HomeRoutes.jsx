import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

const HomeRoutes = () => {
  const getRoutes = (routes) => {
    return routes.map((data, key) => {
      if (data.layout === "/") {
        return (
          <Route path={`/${data.path}`} element={data.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return <Routes>{getRoutes(routes)}</Routes>;
};

export default HomeRoutes;
