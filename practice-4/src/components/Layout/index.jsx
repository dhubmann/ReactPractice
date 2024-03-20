import "./index.scss";
import React from "react";
import Sidebar from "../Sidebar/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
