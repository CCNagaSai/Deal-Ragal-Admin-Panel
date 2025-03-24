import React from "react";
import "../AdminDash.css";
import ReactDOM from "react-dom/client";
import AdminSidebar from "../AdminSidebar"; // Adjust path to Sidebar component
import ADashboard from "../../Agent/AgentDashboard/AgentDashboard";
import Topbar from "../../Common/Topbar";
import Dashboardplayers from "../../Create_Components/DashBoardPlayers/DashBoardPlayers";
const ActivePlayerDetails = () => {
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
          <Dashboardplayers userRole="Admin" />
        </div>
      </div>
    </div>
  );
};

export default ActivePlayerDetails;
