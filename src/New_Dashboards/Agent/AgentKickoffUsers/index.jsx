import React, { useState } from "react";
import "../Agentdash.css";
import ReactDOM from "react-dom/client";
import Sidebar from "../AgentSidebar"; // Adjust path to Sidebar component
import AKickoffUsers from "./AgentKickoffUsers";
import Topbar from "../../Common/Topbar";
import AViewUser from "../AgentSearchUsers/AgentViewUsers";
import ViewUser from "../../Create_Components/ViewUser/ViewUsers";
import KickoffUsers from "../../Create_Components/KickoffUsers/KickoffUsers";

const AgentKickoffUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the clicked user
  };

  // Function to handle back button click to reset user selection
  const handleBackToList = () => {
    setSelectedUser(null); // Reset the selected user
  };

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
          {selectedUser ? (
            // Render AViewUser when a user is selected
            <ViewUser
              user={selectedUser}
              onBack={handleBackToList}
              userRole="Agent"
              apiEndpoints={{
                updatePassword: "/admin/user/UpdatePassword",
                changeStatus: "/admin/agent/changeUserStatus",
              }}
            />
          ) : (
            // Render AUsersList when no user is selected
            <KickoffUsers onUserClick={handleUserClick} userRole="Agent" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentKickoffUsers;
