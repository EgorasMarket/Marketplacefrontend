import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./App/Dashboard";
import HomeRoutes from "./routes/HomeRoutes";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const currentPage = window.location.pathname;
  const myArr = currentPage.split("/");
  return (
    <div className="App">
      {/* {myArr[1] === "app" ? null : <Header />} */}
      <Routes>
        <Route path="/app" element={<Navigate to="/app/home" replace />} />
      </Routes>
      {myArr[1] === "app" ? <Dashboard /> : <HomeRoutes />}
      {/* {myArr[1] === "app" ? null : <Footer />} */}
    </div>
  );
}

export default App;
