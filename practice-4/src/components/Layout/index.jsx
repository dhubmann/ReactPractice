import "./index.scss";
import React from "react";
import Overview from "../Overview";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div>
      <Overview />
      <Sidebar />
    </div>
  );
};

export default Layout;
