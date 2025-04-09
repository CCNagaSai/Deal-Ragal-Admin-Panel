import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import "./DashBoard.css";
import { fetchDashboardData } from "../../Common/OfferState/DashboardOfferState";
const API_URL = import.meta.env.VITE_HOST_URL;

const Dashboard = ({ userRole, onUserClick }) => {
  const [dashboardData, setDashboardData] = useState({
    activeUsers: 0,
    inactiveUsers: 0,
    suspendedUsers: 0,
    activePlayersDetails: [],
    inactivePlayersDetails: [],
  });
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [socketPlayers, setSocketPlayers] = useState([]); // State for socket players


  const idRef = useRef(null);
  const tokenRef = useRef(null);
  const cookies = new Cookies();

  useEffect(() => {
    idRef.current = cookies.get("LoginUserId");
    tokenRef.current = cookies.get("token");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchDashboardData(
        userRole,
        tokenRef.current,
        idRef.current
      );
      console.log("API Response:", result); // ✅ Debug API Response

      if (result.success && result.data) {
        console.log("Active Users Data:", result.data.activeUsers); // ✅ Debug Active Users
        const data = result.data;

        const normalizePlayers = (players, key) =>
          players.map((player) => ({
            ...player,
            chips: player[key] || 0, // Use `chips` or fallback to `coins` value
          }));

        const activePlayers = normalizePlayers(
          data.activeUsers?.activePlayersDetails || [],
          "chip"
        );
        const inactivePlayers = normalizePlayers(
          data.inactiveUsers?.inActivePlayersDetails || [],
          "chips"
        );
        const suspendedPlayers = normalizePlayers(
          data.suspendedUsers?.suspendedPlayerDetails || [],
          "chips"
        );

        const filteredInactivePlayers = inactivePlayers.filter(
          (player) =>
            !activePlayers.some(
              (activePlayer) => activePlayer.playerId === player._id
            )
        );

        const filteredSuspendedPlayers = suspendedPlayers.filter(
          (player) =>
            !activePlayers.some(
              (activePlayer) => activePlayer.playerId === player._id
            )
        );

        setDashboardData({
          activeUsers: data.activeUsers?.totalActiveCount || 0,
          inactiveUsers: data.inactiveUsers?.totalInactiveCount || 0,
          suspendedUsers: data.suspendedUsers?.suspendedUsersCount || 0,
          activePlayersDetails: activePlayers,
          inactivePlayersDetails: filteredInactivePlayers,
          suspendedPlayersDetails: filteredSuspendedPlayers,
        });
      }
      setLoading(false);
    };

  const fetchSocketPlayers = async () => {
    try {
      const token = tokenRef.current;
      if (!token) {
        console.error("Missing authentication token.");
        return;
      }

      const response = await fetch(
        "http://93.127.194.87:9999/admin/agent/activeUsers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token, // Include authentication token
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Socket Players Data:", result); // Debug API response
        if (result.success && result.data) {
          setSocketPlayers(
            result.data.map((player) => ({
              ...player,
              coins: player.coins || 0, // Ensure coins field exists
            }))
          );
        }
      } else {
        console.error("Failed to fetch socket players data.");
      }
    } catch (error) {
      console.error("Error fetching socket players:", error);
    }
    };

    fetchData(); // Initial fetch
  fetchSocketPlayers();

  const interval = setInterval(() => {
    fetchData(); 
    fetchSocketPlayers(); // Refresh socket players periodically
  }, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [userRole]);

  const handleCardClick = (cardType) => {
    setSelectedCard(cardType);
  };

  console.log("Dashboard Data:", dashboardData);

  const handleEndSessionClick = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowConfirm(true);
  };

  const confirmEndSession = async () => {
    if (!selectedPlayerId) return;

    const token = tokenRef.current;
    if (!token) {
      console.error("Missing authentication token.");
      return;
    }

    try {
      const response = await fetch(
        `http://93.127.194.87:9999/admin/agent/logoutUser?playerId=${selectedPlayerId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token, // ✅ Include authentication token
          },
        }
      );

      if (response.ok) {
        setDashboardData((prevData) => ({
          ...prevData,
          activePlayersDetails: prevData.activePlayersDetails.filter(
            (player) => player._id !== selectedPlayerId
          ),
        }));
      } else {
        console.error("Failed to end session");
      }
    } catch (error) {
      console.error("Error ending session:", error);
    }

    setShowConfirm(false);
    setSelectedPlayerId(null);
  };
  const getTotalChips = (players) => {
    return players.reduce((sum, player) => sum + Number(player.chips || 0), 0);
  };

  const renderDetailsTable = (playersDetails, isActive = false) => {
    return (
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm sm:text-base">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Chips</th>
            {isActive && (
              <th className="border border-gray-300 px-4 py-2">Action</th>
            )}
          </tr>
        </thead>
        <tbody>
          {playersDetails.length === 0 ? (
            <tr>
              <td colSpan={isActive ? "3" : "2"}>No players available</td>
            </tr>
          ) : (
            playersDetails.map((player) => (
              <tr key={player.playerId || player._id || index}>
                {" "}
                {/* Ensure unique key */}
                <td className="border border-gray-300 px-4 py-2">
                  {player.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {player.chips}
                </td>
                {isActive && (
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() =>
                        handleEndSessionClick(player.playerId || player._id)
                      } // ✅ Use correct ID
                    >
                      End Session
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };

  const handleViewButtonClick = (user) => {
    onUserClick(user);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">{userRole} Dashboard</h1>
      <div className="card-container">
        <div className="card blue" onClick={() => setSelectedCard("active")}>
          <div className="card-icon">
            <i className="fas fa-user"></i>
          </div>
          <div className="card-content">
            <div className="icon-number-row">
              <i className="fas fa-user"></i>
              <h2>{dashboardData.activeUsers}</h2>
            </div>
            <p>Active Players</p>
          </div>
        </div>

        <div
          className="card orange"
          onClick={() => handleCardClick("inactive")}
        >
          <div className="card-icon">
            <i className="fas fa-user-times"></i>
          </div>
          <div className="card-content">
            <div className="icon-number-row">
              <i className="fas fa-user-times"></i>
              <h2>{dashboardData.inactiveUsers}</h2>
            </div>
            <p>Inactive Players</p>
          </div>
        </div>

        <div className="card red" onClick={() => handleCardClick("suspended")}>
          <div className="card-icon">
            <i className="fas fa-user-times"></i>
          </div>
          <div className="card-content">
            <div className="icon-number-row">
              <i className="fas fa-user-times"></i>
              <h2>{dashboardData.suspendedUsers}</h2>
            </div>
            <p>Suspended Players</p>
          </div>
        </div>
      </div>
      <div className="card green" onClick={() => handleCardClick("socket")}>
        <div className="card-icon">
          <i className="fas fa-plug"></i>
        </div>
        <div className="card-content">
          <div className="icon-number-row">
            <i className="fas fa-plug"></i>
            <h2>{socketPlayers.length}</h2>
          </div>
          <p>Socket Players</p>
        </div>
      </div>

      <div className="online-users-section"></div>

      {selectedCard === "active" && (
        <div className="details-table">
          {/* 👇 Enhanced Summary Section */}
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex flex-col">
              <span className="text-lg text-gray-500">
                Total Active Players
              </span>
              <span className="text-2xl font-semibold text-gray-800">
                {dashboardData.activePlayersDetails.length}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg text-gray-500">Total Chips</span>
              <span className="text-2xl font-semibold text-indigo-600">
                {getTotalChips(dashboardData.activePlayersDetails)}
              </span>
            </div>
          </div>

          {/* 👇 Player Table */}
          {renderDetailsTable(dashboardData.activePlayersDetails, true)}
        </div>
      )}

      {selectedCard === "inactive" && (
        <div className="details-table">
          {renderDetailsTable(dashboardData.inactivePlayersDetails)}
        </div>
      )}

      {selectedCard === "suspended" && (
        <div className="details-table">
          {renderDetailsTable(dashboardData.suspendedPlayersDetails)}
        </div>
      )}
      {selectedCard === "socket" && (
        <div className="details-table">
          {renderDetailsTable(socketPlayers, true)}
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Are you sure you want to end the session of this user?</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 px-4 py-2 mr-2 rounded"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={confirmEndSession}
              >
                Yes, End Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
