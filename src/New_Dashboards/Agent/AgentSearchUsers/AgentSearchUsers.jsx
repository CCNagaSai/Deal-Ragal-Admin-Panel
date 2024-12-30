import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import AgentBalanceAdjust from "../AgentBalanceAdjustment/AgentBalanceAdjust";

const cookies = new Cookies();

const AUsersList = ( {onUserClick} ) => {
  const navigate = useNavigate();

  // State
  const [data, setData] = useState([]); // Initially empty data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(""); 
  const [selectedUser, setSelectedUser] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Store id and type using useRef
  const idRef = useRef(null);
  const typeRef = useRef(null);
  const tokenRef = useRef(null);

  useEffect(() => {
    // Get id and type from cookies
    idRef.current = cookies.get("LoginUserId");
    typeRef.current = cookies.get("name");
    tokenRef.current = cookies.get("token");
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const id = idRef.current;
        const type = typeRef.current;
        const token = tokenRef.current;

        if (!id || !type) {
          throw new Error("Missing id or type from cookies");
        }
        const response = await fetch(
          `http://93.127.194.87:9999/admin/user/agent/UserList?Id=${id}&type=${type}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: token, // Send token from cookies
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json(); // Parse the JSON
        setData(result.userList || []); // Set the data
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setError("Failed to load user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleTransferPointsClick = (type, user) => {
    console.log("Transfer Points Clicked", { type, user });
    setSelectedType(type);
    setSelectedUser(user);
    setIsModalOpen(true); // Open the modal
  };
  
  

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleUserClick = (user) => {
    onUserClick(user);
  };

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);
  console.log(data, "cccccccc");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // Inline CSS
  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "20px",
  };

  const modalContentStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    width: "90%",
    height: "80%",
    maxWidth: "500px",
    position: "relative",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    overflowY: "auto",
  };

  const modalCloseStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    backgroundColor: "blue",
    border: "none",
    fontSize: "30px",
    color: "white",
    fontWeight: "bold",
    padding: "5px 10px 5px 10px", // Added padding to create space around the button
  };
  

  return (
    <div className="user-list-container font-sans p-4 sm:p-6 bg-gray-100">
      <h1 className="view-users-heading text-xl sm:text-2xl text-blue-500 text-left border-b-4 border-blue-500 pb-2 mb-6">
        View Users
      </h1>

      <div className="user-details bg-white p-4 sm:p-6 rounded-md shadow-md">
        <div className="user-summary text-sm sm:text-lg font-bold mb-4">
          <span>
            TOTAL USERS: ({data.length}) TOTAL POINTS: (
            {data.reduce((sum, item) => sum + item.chips, 0)})
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="user-table w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr>
                <th
                  onClick={() => handleSort("name")}
                  className="px-2 sm:px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
                >
                  Player
                </th>
                <th
                  onClick={() => handleSort("chips")}
                  className="px-2 sm:px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
                >
                  Points
                </th>
                <th
                  onClick={() => handleSort("lastLoginDate")}
                  className="px-2 sm:px-4 py-2 bg-blue-500 text-white cursor-pointer hover:bg-blue-700"
                >
                  Last Login
                </th>
                <th className="px-2 sm:px-4 py-2 bg-blue-500 text-white">
                  Status
                </th>
                <th className="px-2 sm:px-4 py-2 bg-blue-500 text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td
                    onClick={() => handleUserClick(row)}
                    className="clickable cursor-pointer px-2 sm:px-4 py-2 text-blue-500 hover:underline"
                  >
                    {row.name || "N/A"}
                  </td>
                  <td className="px-2 sm:px-4 py-2">{row.chips || 0}</td>
                  <td className="px-2 sm:px-4 py-2">
                    {row.lastLoginDate || "N/A"}
                  </td>
                  <td
                    className="px-2 sm:px-4 py-2"
                  >
                    {row.status ? "Active" : "Inactive"}
                  </td>
                  <td className="clickable cursor-pointer px-2 sm:px-4 py-2 text-blue-500 hover:underline"
                     onClick={() =>
                      handleTransferPointsClick("User", row._id)
                    }
                    >
                      TRANSFER POINTS
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pagination flex justify-between items-center mt-6">
        <button
          className="prev px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <span className="page-info text-blue-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="next px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {isModalOpen && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button
              style={modalCloseStyle}
              onClick={handleModalClose}
            >
              &times;
            </button>
            <AgentBalanceAdjust
              prefilledType={selectedType}
              prefilledUser={selectedUser}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AUsersList;