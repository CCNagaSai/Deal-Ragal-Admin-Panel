import React from "react";
import "../AdminDash.css";
import ReactDOM from "react-dom/client";
import AdminSidebar from "../AdminSidebar"; // Adjust path to Sidebar component
import Topbar from "../../Common/Topbar";
import AgentSubAgentPointFile from "./AgentSubAgentReportpointFile";

const SubAgentPointFiles = () => {
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
          <AgentSubAgentPointFile />
        </div>
      </div>
    </div>
  );
};

export default SubAgentPointFiles;
