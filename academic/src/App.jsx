import React from 'react';
import AdminDashboard from './AdminDashboard'; 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 p-8">
     
      <header className="relative   bg-opacity-30 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 backdrop-blur-lg border border-gray-600 rounded-lg shadow-neon text-white p-4 flex justify-between items-center">
     
        <div className="square-box bg-gradient-to-br from-teal-400 to-teal-600 border-4 border-cyan-500 w-16 h-16 shadow-3d-square transform -rotate-6 hover:rotate-0 transition-transform duration-300 flex justify-center items-center">
          <div className="inner-box bg-white w-12 h-12 flex justify-center items-center rounded-lg shadow-inner">
          
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

       
        <h1 className="text-4xl font-extrabold tracking-wider drop-shadow-md transform hover:translate-y-1 hover:translate-x-1 transition-transform duration-300">
          Admin Kingdom Portal
        
        </h1>
      </header>

      <main className="mt-8 p-6">
        <AdminDashboard />
        
      </main>

     
      <footer className="bg-opacity-30 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 backdrop-blur-lg border border-gray-600 rounded-lg shadow-neon text-white p-4 text-center mt-8">
        <p className="text-sm">© 2024 Admin Kingdom Portal - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
