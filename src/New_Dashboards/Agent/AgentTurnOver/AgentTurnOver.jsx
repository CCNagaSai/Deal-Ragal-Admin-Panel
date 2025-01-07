import React, { useState, useEffect, useRef } from 'react';
import './AgentTurnOver.css'; 
import Cookies from "universal-cookie";

const cookies = new Cookies();
  
const ATurnover = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [backendData, setBackendData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [filters, setFilters] = useState({
    gameName: '',
    userId: '',
    handId: '',
    startDate: '',
    endDate: '',
  });
  const [dateRange, setDateRange] = useState('Select');
  const [columns, setColumns] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showTable, setShowTable] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [noResults, setNoResults] = useState(false);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const idRef = useRef(null);
  const typeRef = useRef(null);
  const tokenRef = useRef(null);

  // Fetch and set user data from cookies
  useEffect(() => {
    idRef.current = cookies.get("LoginUserId");
    typeRef.current = cookies.get("name");
    tokenRef.current = cookies.get("token");
  }, []);

  const token = tokenRef.current;
  const id = idRef.current;

  // Desktop and mobile columns
  const desktopColumns = [
    "S.No",
    "User Id",
    "Agent",
    "Sub Distributor",
    "Play Points",
    "Win Points",
    "End Points"
  ];

  const mobileColumns = [
    "S.No",
    "User Id",
    "Agent",
    "Sub Distributor",
    "Play Points",
    "Win Points",
    "End Points"

  ];

  // Dynamically adjust columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setColumns(isMobile ? mobileColumns : desktopColumns);
  }, [isMobile]);

  // Handle filter change and date range calculations
  const handleDateRangeChange = (range) => {
    const today = new Date();
    let startDate = new Date();
    let endDate = new Date();

    switch (range) {
      case 'Today':
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'Yesterday':
        startDate.setDate(today.getDate() - 1);
        endDate.setDate(today.getDate() - 1);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        break;
      case 'Last 7 Days':
        startDate.setDate(today.getDate() - 7);
        startDate.setHours(0, 0, 0, 0);
        break;
      case 'Last 30 Days':
        startDate.setDate(today.getDate() - 30);
        startDate.setHours(0, 0, 0, 0);
        break;
      default:
        break;
    }

    // Set start and end date in filters and update the state
    setFilters((prevFilters) => ({
      ...prevFilters,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    }));
    setDateRange(range); // Update selected date range
  };

  const handleManualDateChange = (e, field) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [field]: e.target.value };
      if (newFilters.startDate && newFilters.endDate) {
        setDateRange('Select'); // Reset Date Range to Select if custom dates are entered
      }
      return newFilters;
    });
  };

  const handleFilterChange = () => {
    let filtered = backendData;

    // Filter by username
    if (filters.userId) {
      filtered = filtered.filter((entry) =>
        entry.username.toLowerCase().includes(filters.userId.toLowerCase())
      );
    }

    // Filter by date range
    if (filters.startDate && filters.endDate) {
      const startDate = new Date(filters.startDate);
      startDate.setHours(0, 0, 0, 0); // Start of the day
      const endDate = new Date(filters.endDate);
      endDate.setHours(23, 59, 59, 999); // End of the day

      filtered = filtered.filter((entry) => {
        const entryDate = new Date(entry.createdAt);
        return entryDate >= startDate && entryDate <= endDate;
      });
    }

    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    setCurrentPage(1);
    setFilteredData(filtered);
    setShowTable(filtered.length > 0);
    setNoResults(filtered.length === 0); // Check if no results are found
    setIsSubmitted(true); // Indicate filters have been applied

  };
  
  
  const handleClear = () => {
    setFilters({
      gameName: '',
      userId: '',
      handId: '',
      startDate: '',
      endDate: '',
    });
    setCurrentPage(1);
    setDateRange('Select');
    setFilteredData(backendData); // Reset filters
    setShowTable(false); // Hide the table when cleared
    setIsSubmitted(false); // Reset the "submitted" state
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const totalPlayPoints = Array.isArray(filteredData)
    ? filteredData.reduce((acc, entry) => acc + parseFloat(entry.playPoints || 0), 0)
    : 0;
  const totalWinPoints = Array.isArray(filteredData)
    ? filteredData.reduce((acc, entry) => acc + parseFloat(entry.winpoints || 0), 0)
    : 0;
  const totalEndPoints = Array.isArray(filteredData)
    ? filteredData.reduce((acc, entry) => acc + parseFloat(entry.endPoints || 0), 0)
    : 0;

  useEffect(() => {
    if (id && token) {
      const fetchBackendData = async () => {
        try {
          const response = await fetch(
            `http://93.127.194.87:9999/admin/agent/RouletteGameHistory?agentId=${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                token: token,
              },
            }
          );
  
          if (response.ok) {
            const data = await response.json();
            if (data && Array.isArray(data.gameHistoryData)) {
              const flattenedHistory = data.gameHistoryData.flatMap(
                (entry) => entry.history || []
              );

              flattenedHistory.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
              
              console.log("history", flattenedHistory)
              setBackendData(flattenedHistory);
              setFilteredData(flattenedHistory);
            } else {
              console.error("Expected an array from the backend API:", data);
            }
          } else {
            console.error("Failed to fetch backend data");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      fetchBackendData();
    }
  }, [token, id]);
  console.log("backendsdata", backendData)

  console.log('Expanded Row:', expandedRow);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };
  


  const toggleRow = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  console.log(filteredData, "cccccccc");

  return (
    <div>

      <div className="flex flex-col md:flex-row">

        <div className="flex-1 ml-[4px] mr-[4px] md:max-w-[1100px] mx-auto border border-blue-500 p-[5px]">
        <h2 className="text-blue-600 text-[18px] ml-1 md:text-xl font-bold mb-6 border-b border-blue-500 pb-3 ">
            Turn Over Report </h2>

          {/* Filter Form */}
          <div className="bg-[#e6ebff] p-5 rounded-lg shadow-lg m-1 sm:m-3">
            <form className="flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 mb-0 sm:mb-5 w-full">
              <div className="flex-1 mb-4 sm:mb-0">
                <label className="block mb-2">Username:</label>
                <input
                  type="text"
                  value={filters.userId}
                  onChange={(e) => setFilters({ ...filters, userId: e.target.value })}
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter username"
                />
              </div>
              </div>

              {/* Date filters */}
              <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 mb-5 w-full">
                <div className="flex-1 mb-4 ">
                  <label className="block mb-2">Start Date:</label>
                  <input
                    type="date"
                    value={filters.startDate}
                    onChange={(e) => handleManualDateChange(e, 'startDate')}
                    className="w-full p-2 sm:p-3  border  border-gray-300 rounded-lg"
                  />
                </div>

                <div className="flex-1 mb-4 sm:mb-0">
                  <label className="block mb-2">End Date:</label>
                  <input
                    type="date"
                    value={filters.endDate}
                    onChange={(e) => handleManualDateChange(e, 'endDate')}
                    className="w-full p-2 sm:p-3  border  border-gray-300 rounded-lg"
                  />
                </div>

                <div className="flex-1 mb-4 sm:mb-0">
                  <label className="block mb-2">Date Range:</label>
                  <select
                    value={dateRange}
                    onChange={(e) => handleDateRangeChange(e.target.value)}
                    className="w-full p-2 sm:p-3  border  border-gray-300 rounded-lg"
                  >
                    <option value="Select">Select</option>
                    <option value="Today">Today</option>
                    <option value="Yesterday">Yesterday</option>
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              {/* Submit and Clear buttons */}
              <div className="flex justify-center w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleFilterChange}
                    className="bg-blue-500 text-white p-2 sm:p-3 md:px-4 py-2 rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-20 sm:w-auto"
                    style={{ width: '150px' }}
                  >
                    Apply Filters
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="bg-blue-500 text-white p-2 sm:p-3 md:px-4 py-2 rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-20 sm:w-auto"
                    style={{ width: '150px' }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Show selected filters after submit */}
          {isSubmitted && (
            <div className="bg-[#e6ebff] p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4 rounded-md m-2 text-sm sm:text-base">
              <span className="block">Start Date: {filters.startDate || 'Not Selected'}</span>
              <span className="block">End Date: {filters.endDate || 'Not Selected'}</span>
            </div>
          )}

          {/* Display Message if No Results */}
          {noResults && <p>No records found based on the selected filters.</p>}

          {/* Conditionally render the table */}
          {showTable && (
            <div>
            <div className="overflow-x-auto mt-8">
            <table className="table-auto border-collapse border border-gray-300 w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-200">
                  {/* <th className="border border-gray-300 px-4 py-2">User ID</th> */}
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Play Points</th>
                  <th className="border border-gray-300 px-4 py-2">Won Points</th>
                  <th className="border border-gray-300 px-4 py-2">End Points</th>
                  <th className="border border-gray-300 px-4 py-2">Margin</th>
                  <th className="border border-gray-300 px-4 py-2">Net</th>
                  <th className="border border-gray-300 px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {/* {filteredData.map((item, index) => ( */}
                {filteredData
                  .filter((item) => item.play !== 0)
                  .slice(startIndex, startIndex + itemsPerPage)
                .map((item, index) => {
                  // Calculate derived values
                  const playPoints = item.play;
                  const wonPoints = item.won;
                  const endPoints = playPoints - wonPoints;
                  const margin = (2.5 / 100) * playPoints;
                  const net = endPoints - margin;

                  // Helper function to format numbers
                  const formatValue = (value) => (value % 1 === 0 ? value : value.toFixed(2));

                  return (
                    <React.Fragment key={item.uuid}>
                      <tr key={index} className="odd:bg-white even:bg-gray-100">
                        {/* <td className="border border-gray-300 px-4 py-2">{item.userId}</td> */}
                        <td className="border border-gray-300 px-4 py-2">{item.username}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatValue(playPoints)}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatValue(wonPoints)}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatValue(endPoints)}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatValue(margin)}</td>
                        <td className="border border-gray-300 px-4 py-2">{formatValue(net)}</td>
                        <td className="border border-gray-300 px-4 py-2">
                          {new Date(item.createdAt).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: true,
                          })}
                        </td>
                      </tr>
                  </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
            {/* Pagination controls */}
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
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATurnover;
