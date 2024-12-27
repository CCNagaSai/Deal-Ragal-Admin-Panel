import React, { useState, useEffect, useRef } from 'react';
import FormTable from '../../Common/Report/Table';
import '../AgentGameHistory/AgentGameHistory.css'; 
import { mData } from '../../Common/data/mData';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ATurnover = () => {
  const [filteredData, setFilteredData] = useState(mData);
  const [filters, setFilters] = useState({
    gameName: '',
    userId: '',
    handId: '',
    startDate: '',
    endDate: '',
    userName: '',
  });
  const [dateRange, setDateRange] = useState('Select');
  const [columns, setColumns] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track screen size
  const [showTable, setShowTable] = useState(false); // State to control table visibility
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backendData, setBackendData] = useState([]);
  const [dropdownData, setDropdownData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  // References for cookies
  const idRef = useRef(null);
  const typeRef = useRef(null);
  const tokenRef = useRef(null);

  // Define columns for both tables
  const desktopColumnsTable1 = [
    "Sub Agent", "Play Points", "Win Points", "End Points", "Margin", "Net", "Bonus", "PL"
  ];

  const desktopColumnsTable2 = [
    "##", "User", "Play Points", "Win Points", "End Points", "Margin", "Net", "Bonus"
  ];

  const mobileColumnsTable1 = [
    "Sub Agent", "Play Points", "Win Points", "End Points", "Margin", "Net", "Bonus", "PL"
  ];

  const mobileColumnsTable2 = [
    "##", "User", "Play Points", "Win Points", "End Points", "Margin", "Net", "Bonus"
  ];

  // Fetch user data from the backend
  useEffect(() => {
    idRef.current = cookies.get("LoginUserId");
    typeRef.current = cookies.get("name");
    tokenRef.current = cookies.get("token");

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
              token: token,
            },
          }
        );
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log("API Response:", result);
    
        const userList = result.userList || [];
        console.log("User List:", userList);
    
        // Mapping API response to match table structure
        const processedData = userList.map((user) => ({
          name: user.name || 'N/A',
          // playPoints: user.chips || 0,  // Map chips to playPoints
          // winPoints: user.counters.totalMatch || 0, // You can adjust this based on available fields
          // endPoints: 0,  // Adjust based on actual data
          // margin: 0,  // Adjust based on actual data
          // net: 0,  // Adjust based on actual data
          // bonus: 0,  // Adjust based on actual data
          // pl: 0,  // Adjust based on actual data
          // userId: user.id || '',
          // handId: user.uniqueId || ''
        }));
    
        console.log("Processed Data:", processedData);
    
        // Set the data for both tables
        setFilteredData(backendData); // First table data
        setBackendData(userList);   // Second table data
        setShowTable(processedData.length > 0);
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setError("Failed to load user data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
        
    fetchUserData();
  }, []);

  // Dynamically adjust columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setColumns({
      table1: isMobile ? mobileColumnsTable1 : desktopColumnsTable1,
      table2: isMobile ? mobileColumnsTable2 : desktopColumnsTable2
    });
  }, [isMobile]);

  const handleFilterChange = () => {
    let filtered = mData;

    // Filter by selected date range
    if (dateRange !== 'Select') {
      const today = new Date();
      let startDate, endDate;

      if (dateRange === 'Today') {
        startDate = endDate = today;
      } else if (dateRange === 'Yesterday') {
        startDate = new Date(today.setDate(today.getDate() - 1));
        endDate = startDate;
      } else if (dateRange === 'Last 7 Days') {
        startDate = new Date(today.setDate(today.getDate() - 7));
        endDate = today;
      } else if (dateRange === 'Last 30 Days') {
        startDate = new Date(today.setDate(today.getDate() - 30));
        endDate = today;
      }

      if (startDate && endDate) {
        filtered = filtered.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate >= startDate && entryDate <= endDate;
        });
      }
    }

    // Filter by start and end date
    if (filters.startDate && filters.endDate) {
      filtered = filtered.filter((entry) => {
        const entryDate = new Date(entry.date);
        return entryDate >= new Date(filters.startDate) && entryDate <= new Date(filters.endDate);
      });
    }

    // Filter by other fields
    if (filters.gameName) {
      filtered = filtered.filter((entry) =>
        entry.gameName.toLowerCase().includes(filters.gameName.toLowerCase())
      );
    }

    if (filters.userId) {
      filtered = filtered.filter((entry) =>
        entry.userId.toLowerCase().includes(filters.userId.toLowerCase())
      );
    }

    if (filters.handId) {
      filtered = filtered.filter((entry) =>
        entry.handId.toLowerCase().includes(filters.handId.toLowerCase())
      );
    }

    setFilteredData(filtered);

    // Show the table after applying filters
    setShowTable(filtered.length > 0);
    setIsSubmitted(true); // Mark the form as submitted
  };

  useEffect(() => {
    if (backendData.length > 0) {
      setFilteredData(backendData); // Show all users initially
    }
  }, [backendData]);
  

  const handleClear = () => {
    setFilters({
      gameName: '',
      userId: '',
      handId: '',
      startDate: '',
      endDate: '',
      userName: '',
    });
    setDateRange('Select');
    setFilteredData(backendData); // Reset filters to show all users
    setDropdownData([]); // Clear the dropdown
    setShowTable(backendData.length > 0); // Show table if there is data
    setIsSubmitted(false);
  };

  const totalPlayPoints = filteredData.reduce((acc, entry) => acc + parseFloat(entry.playPoints || 0), 0);

  console.log("backeendddd", backendData)
  const handleUserSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setFilters({ ...filters, userName: searchValue });
  
    if (searchValue) {
      const filteredDropdown = backendData.filter((user) =>
        user.name && user.name.toLowerCase().includes(searchValue)
      );
      setFilteredData(filteredDropdown); // Update the filtered data for the table
      setDropdownData(filteredDropdown);
    } else {
      setFilteredData(backendData); // Show all users if search is empty
      setDropdownData([]); // Clear the dropdown
    }
  };
  
  
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setFilters({ ...filters, userName: user.name });
    setFilteredData([user]); // Show only the selected user in the table
    setDropdownData([]); // Clear the dropdown
  };
  
  

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row">


        <div className="flex-1 ml-[4px] mr-[4px] md:max-w-[1100px] mx-auto border border-blue-500 p-[5px]">
        <h2 className="text-blue-600 text-[18px] ml-1 md:text-xl font-bold mb-6 border-b border-blue-500 pb-3 ">
            Turn Over Report Search </h2>

          {/* Filter Form */}
          <div className="bg-[#e6ebff] p-5 rounded-lg shadow-lg m-1 sm:m-3">
            <form className="space-y-6">
              {/* First row: Game Type, Affiliate, and Date Range */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6">
                {/* User Search */}
                <div className="relative mb-4">
                  <label className="block text-gray-700 font-medium">Search User:</label>
                  <input
                    type="text"
                    value={filters.userName}
                    onChange={handleUserSearch}
                    placeholder="Type to search by username..."
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                  {dropdownData.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto">
                      {dropdownData.map((user, index) => (
                        <li
                          key={index}
                          onClick={() => handleUserSelect(user)}
                          className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                        >
                          {user.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {/* Submit and Clear buttons */}
              {/* <div className="flex justify-center w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleFilterChange}
                    className="bg-blue-500 text-white p-2 sm:p-3 md:px-4 py-2 rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-20 sm:w-auto"
                    style={{ width: '100px' }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="bg-blue-500 text-white p-2 sm:p-3 md:px-4 py-2 rounded-lg font-bold hover:bg-blue-600 text-sm sm:text-base w-20 sm:w-auto"
                    style={{ width: '100px' }}
                  >
                    Clear
                  </button>
                </div>
              </div> */}
            </form>
          </div>

          {/* Filtered Data Information */}
          {isSubmitted && (
            <div className="bg-[#e6ebff] p-4 flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4 rounded-md m-2 text-sm sm:text-base">
              <span className="block">Start Date: {filters.startDate || 'Not Selected'}</span>
              <span className="block">End Date: {filters.endDate || 'Not Selected'}</span>
            </div>
          )}
          {loading ? (
            <div className="text-center text-blue-500">Loading...</div>
          ) : showTable ? (
            <div className="overflow-x-auto mt-2 sm:mt-3">
              <div className="overflow-x-auto mt-8">
                <table className="table-auto border-collapse border border-gray-300 w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-blue-200">
                      <th className="border border-gray-300 px-4 py-2">ID</th>
                      <th className="border border-gray-300 px-4 py-2"> User Name</th>
                      <th className="border border-gray-300 px-4 py-2">Chips</th>
                      <th className="border border-gray-300 px-4 py-2">Play Points</th>
                      <th className="border border-gray-300 px-4 py-2">Won Points</th>
                      <th className="border border-gray-300 px-4 py-2">End Points</th>
                      <th className="border border-gray-300 px-4 py-2">Margin</th>
                      <th className="border border-gray-300 px-4 py-2">Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.map((item, index) => (
                        <tr key={index} className="odd:bg-white even:bg-gray-100">
                          <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.chips}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.totalPlayPoints}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.totalWonPoints}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.endPoints}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.margin}</td>
                          {/* Calculate net as endPoints - margin */}
                          <td className="border border-gray-300 px-4 py-2">{(item.endPoints || 0) - (item.margin || 0)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center text-gray-500 px-4 py-2">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">No data available</div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ATurnover;
