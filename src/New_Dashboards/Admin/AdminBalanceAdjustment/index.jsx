import React from "react";
import "../AdminDash.css";
import ReactDOM from "react-dom/client";
import Sidebar from "../AdminSidebar"; // Adjust path to Sidebar component
import Topbar from "../../Common/Topbar";
import AdminBalanceAdjust from "./AdminBalanceAdjustement";

const AdminBalanceAdjustment = () => {
  return (
    <div className="app">
      <div className="Header">
        <Topbar />
      </div>
      <div className="content">
        <div className="Left">
          <Sidebar />
        </div>
        <div className="Right">
          <AdminBalanceAdjust />
        </div>
      </div>
    </div>
  );
};

export default AdminBalanceAdjustment;
