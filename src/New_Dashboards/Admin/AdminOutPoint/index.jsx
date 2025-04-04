import React from "react";
import "../AdminDash.css";
import ReactDOM from "react-dom/client";
import AdminSidebar from "../AdminSidebar"; // Adjust path to Sidebar component
import Topbar from "../../Common/Topbar";
import AdminOutpoints from "./AdminOutPoint";
import OutPointReport from "../../Create_Components/OutPoints/OutPoints";

const AdminOutPoint = () => {
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
          <OutPointReport userRole="Admin" />
        </div>
      </div>
    </div>
  );
};

export default AdminOutPoint;
