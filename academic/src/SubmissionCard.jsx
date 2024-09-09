import React from 'react';

const SubmissionCard = ({ submission, onApprove, onReject }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-purple-glow rounded-lg shadow-3d p-6 mb-4 flex justify-between items-center hover:scale-105 transition-transform duration-300">
      <div>
        <h2 className="text-2xl font-extrabold text-neon-blue">{submission.title}</h2>
        <p className="text-md text-white">Submitted by: {submission.student}</p>
        <p className="text-md text-white">Date: {submission.date}</p>
      </div>
      <div className="space-x-3 flex">
        <button
          onClick={() => onApprove(submission.id)}
          className="relative bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1 hover:translate-x-1 active:translate-y-2 active:shadow-none"
          style={{ perspective: '1000px' }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 opacity-20 rounded-lg blur-lg"></span>
          <span className="relative">Approve</span>
        </button>
        <button
          onClick={() => onReject(submission.id)}
          className="relative bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1 hover:translate-x-1 active:translate-y-2 active:shadow-none"
          style={{ perspective: '1000px' }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-700 opacity-20 rounded-lg blur-lg"></span>
          <span className="relative">Reject</span>
        </button>
      </div>
    </div>
  );
};

export default SubmissionCard;
