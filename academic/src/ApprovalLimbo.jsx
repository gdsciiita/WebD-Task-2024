import React, { useState } from 'react';

const pendingResources = [
  {
    id: 1,
    title: 'Biology Paper 2023',
    description: 'Awaiting approval for Biology papers submitted in 2023.',
    category: 'Biology',
    date: '2024-09-01',
  },
  {
    id: 2,
    title: 'Math Notes 2022',
    description: 'Detailed math notes pending approval.',
    category: 'Math',
    date: '2024-09-02',
  },
];

const ApprovalLimbo = () => {
  const [resources, setResources] = useState(pendingResources);

  const handleApprove = (id) => {
    const updatedResources = resources.filter((resource) => resource.id !== id);
    setResources(updatedResources);
    // Additional logic for backend approval here (API call, etc.)
    alert(`Resource ID ${id} has been approved!`);
  };

  const handleReject = (id) => {
    const updatedResources = resources.filter((resource) => resource.id !== id);
    setResources(updatedResources);
    // Additional logic for backend rejection here (API call, etc.)
    alert(`Resource ID ${id} has been rejected!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 text-white p-8">
      <h1 className="text-3xl font-extrabold mb-6">Approval Limbo</h1>

      {resources.length === 0 ? (
        <p className="text-lg text-white">No pending resources for approval.</p>
      ) : (
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-dark-purple p-6 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-2">{resource.title}</h2>
              <p className="mb-2">{resource.description}</p>
              <p className="mb-2">
                <strong>Category:</strong> {resource.category}
              </p>
              <p className="mb-4">
                <strong>Date Submitted:</strong> {resource.date}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleApprove(resource.id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(resource.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApprovalLimbo;
