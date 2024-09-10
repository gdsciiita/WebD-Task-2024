import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './front.css'; 

function Front() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple authentication logic
    if (username === 'bikram' && password === '1234') {
      navigate('/student-dashboard');
    } else if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid username or password');
      setPassword('');

    }
  };

  const ExploreClick = () => {
    if (!username || !password) {
      alert('Please enter your login credentials first.');
    } else {
     
      alert('You are already logged in.');
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 relative">
      <div className="absolute inset-0 bg-college bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <header className="p-6 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wider drop-shadow-lg">
            Welcome to IIIT Allahabad
          </h1>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-3d">
            <form className="flex space-x-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent border-b-2 border-gray-300 text-white focus:outline-none placeholder-white p-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-b-2 border-gray-300 text-white focus:outline-none placeholder-white p-2"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg shadow-button-glow hover:shadow-purple-500/40 transition-all duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold text-white drop-shadow-lg mb-6">
              Explore Our Academic Treasures
            </h2>
            <p className="text-lg text-white opacity-80 mb-8">
              Unlock access to past notes, question papers, and valuable resources for your academic journey.
            </p>
            <button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-800 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-full shadow-3d transition-all duration-300"
              onClick={ExploreClick}
            >
              Start Exploring
            </button>
          </div>
        </main>

        <footer className="bg-opacity-20 bg-dark-purple backdrop-blur-lg border-t border-gray-600 text-white text-center py-6">
          <p className="text-sm">© 2024 Dream College - All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Front;
