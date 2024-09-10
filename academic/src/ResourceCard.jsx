
import React from 'react';

const ResourceCard = ({ title, description, category, date }) => (
  <div className="resource-card bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
    <div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-lg mb-4">{description}</p>
      <span className="text-sm text-bg-white">{category} - {date}</span>
    </div>
    <button className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      View Details
    </button>
  </div>
);

export default ResourceCard;
