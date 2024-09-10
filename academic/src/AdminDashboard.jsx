import React, { useState } from 'react';
import SubmissionCard from './SubmissionCard';

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([
    { id: 1, title: 'Math Paper 2023', student: 'John Doe', date: '2024-09-01', status: 'pending' },
    { id: 2, title: 'Physics Notes 2022', student: 'Jane Smith', date: '2024-09-02', status: 'pending' },
    { id: 1, title: 'Math Paper 2023', student: 'John Doe', date: '2024-09-01', status: 'pending' },
    { id: 2, title: 'Physics Notes 2022', student: 'Jane Smith', date: '2024-09-02', status: 'pending' },
    { id: 1, title: 'Math Paper 2023', student: 'John Doe', date: '2024-09-01', status: 'pending' },
    { id: 2, title: 'Physics Notes 2022', student: 'Jane Smith', date: '2024-09-02', status: 'pending' },
  
  ]);

  const handleApprove = (id) => {
    setSubmissions(
      submissions.map((sub) =>
        sub.id === id ? { ...sub, status: 'approved' } : sub
      )
    );
  };

  const handleReject = (id) => {
    setSubmissions(
      submissions.map((sub) =>
        sub.id === id ? { ...sub, status: 'rejected' } : sub
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 p-10">
      <h1 className="text-4xl font-bold text-white mb-10 text-center drop-shadow-md">
        Admin Dashboard
      </h1>
      {submissions.length === 0 ? (
        <p className="text-lg text-white text-center">No submissions to review.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {submissions.map((submission) => (
            <SubmissionCard
              key={submission.id}
              submission={submission}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
