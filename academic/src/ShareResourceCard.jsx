import React, { useState } from 'react';
import './studentDashboard.css';

const ShareResourceCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ title, description, category, file });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 text-white">
      <div className="bg-dark-purple p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Share Your Resource</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded-lg bg-transparent border-b-2 border-gray-300 focus:border-purple-500"
              placeholder="Enter resource title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded-lg bg-transparent border-b-2 border-gray-300 focus:border-purple-500"
              placeholder="Provide a brief description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full   p-2 rounded-lg bg-transparent border-b-2 border-gray-300 focus:border-purple-500"
              required
              
              style={{
                backgroundColor: '#2c2a6b',  
                color: 'white',              
              }}
            >
              <option value="" style={{ color: 'black' }} >Select category</option>
            
    <option value="Math" style={{ color: 'black' }}>Math</option>
    <option value="Physics" style={{ color: 'black' }}>Physics</option>
    <option value="Chemistry" style={{ color: 'black' }}>Chemistry</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Upload File</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 bg-transparent border-b-2 border-gray-300 focus:border-purple-500"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Submit Resource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareResourceCard;
