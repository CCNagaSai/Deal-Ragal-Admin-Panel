import React from "react";
import "../SubAgentdash.css";
import ReactDOM from "react-dom/client";
import Sidebar from "../subAgentSidebar"; // Adjust path to Sidebar component
import SubADashboard from "./subAgentDashboard";
import Topbar from "../../Common/Topbar";
import Dashboardplayers from "../../Create_Components/DashBoardPlayers/DashBoardPlayers";
const SubAgentdash = () => {
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
          <Dashboardplayers userRole="Sub-Agent" />
        </div>
      </div>
    </div>
  );
};

export default SubAgentdash;
