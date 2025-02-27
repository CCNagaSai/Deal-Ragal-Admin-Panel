import AdminTurnoverReport from "./AdminReport";
import Topbar from "../../Common/Topbar";
import AdminSidebar from "../AdminSidebar"; // Adjust path to Sidebar component
import "../AdminDash.css";
import React from "react";

const AdminTurnOver = () => {
  return (
    <div className="app">
      <div className="Header">
        <Topbar />
      </div>
      <div className="content">
        <div className="Left">
          <AdminSidebar />
        </div>
        <div className="Right">
          <AdminTurnoverReport />
        </div>
      </div>
    </div>
  );
};

export default AdminTurnOver;
