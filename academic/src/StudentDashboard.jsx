import React, { useState } from 'react';
import Slider from 'react-slick';
import ResourceCard from './ResourceCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './studentDashboard.css'; 

const resources = [
  {
    id: 1,
    title: 'Math Paper 2023',
    description: 'An extensive collection of math papers from 2023.',
    category: 'Math',
    date: '2024-09-01',
  },
  {
    id: 2,
    title: 'Physics Notes 2022',
    description: 'Detailed notes covering various topics in physics from 2022.',
    category: 'Physics',
    date: '2024-09-02',
  },
  {
    id: 3,
    title: 'Chemistry Lab Reports',
    description: 'Lab reports and experiments for chemistry students.',
    category: 'Chemistry',
    date: '2024-09-03',
  },
];

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Set up navigation

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-900 text-white">
      <header className="p-6 bg-opacity-30 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 backdrop-blur-lg border-b border-gray-600 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wider drop-shadow-md">Student Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-b-2 border-gray-300 text-white placeholder-white p-2 w-60"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-300">
              🔍
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-gradient-to-r from-teal-400 to-teal-600 hover:from-teal-500 hover:to-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Menu
          </button>
        </div>
      </header>

      <main className="flex-grow p-8">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Explore Past Resources</h2>
          {filteredResources.length === 0 ? (
            <p className="text-lg text-white text-center">No results matching your search.</p>
          ) : (
            <div className="carousel-container">
              <Slider {...settings}>
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    description={resource.description}
                    category={resource.category}
                    date={resource.date}
                    onClick={() => navigate('/student-resource')} // Navigate to StudentResourceCard on click
                  />
                ))}
              </Slider>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-opacity-20 bg-dark-purple backdrop-blur-lg border-t border-gray-600 text-white text-center py-6">
        <p className="text-sm">© 2024 Dream College - All Rights Reserved</p>
      </footer>

      {/* Stylish Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-dark-purple text-white p-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => navigate('/approval-limbo')}
              className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Approval Limbo
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/share-resources')}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Share Resources
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
