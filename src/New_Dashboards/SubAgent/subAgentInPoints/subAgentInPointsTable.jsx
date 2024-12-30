import React from 'react';

const SubAgentInPointTable = ({ backendData }) => {
  if (!backendData || backendData.length === 0) {
    return <p>No data found from the backend.</p>;
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Receiver</th>
            <th className="border border-gray-300 px-4 py-2">Old Points</th>
            <th className="border border-gray-300 px-4 py-2">In</th>
            <th className="border border-gray-300 px-4 py-2">New Points</th>
            <th className="border border-gray-300 px-4 py-2">Sender</th>
            <th className="border border-gray-300 px-4 py-2">Transaction Type</th>
          </tr>
        </thead>
        <tbody>
          {backendData
            .filter(entry => entry.trnxAmount > 0) // Only include rows where "In" has a value
            .map((entry, index) => {
              const dateOnly = entry.createdAt.split('T')[0]; // Extract date
              const isPositive = entry.trnxAmount > 0;
              const inAmount = isPositive ? `₹${entry.trnxAmount}` : ''; // Show in "In" if positive
              
              // Determine sender and receiver based on trnxTypeTxt
            let sender = '';
            let receiver = '';

            switch (entry.trnxTypeTxt) {
              case 'Agent Addeed Chips':
                receiver = entry.name || 'N/A'; // Subagent is receiver
                sender = entry.adminname || 'N/A'; // Agent is sender
                break;
              case 'Agent duduct Chips':
                receiver = entry.adminname || 'N/A'; // Subagent is receiver
                sender = entry.name || 'N/A'; // Agent is sender
                break;
              case 'Add Chips to User':
                receiver = entry.username || 'N/A'; // Agent is receiver
                sender = entry.adminname || 'N/A'; // User is sender
                break;
              case 'User Deduct Chips Added':
                receiver = entry.adminname || 'N/A'; // User is receiver
                sender = entry.username || 'N/A'; // Agent is sender
                break;
              default:
                receiver = 'N/A';
                sender = 'N/A';
            }

              return (
                <tr key={entry._id}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{dateOnly}</td>
                  <td className="border border-gray-300 px-4 py-2">{receiver}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{entry.oppChips || '0'}</td>
                  <td className="border border-gray-300 px-4 py-2">{inAmount}</td>
                  <td className="border border-gray-300 px-4 py-2">₹{entry.chips || '0'}</td>
                  <td className="border border-gray-300 px-4 py-2">{sender}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.trnxTypeTxt || 'N/A'}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SubAgentInPointTable;
