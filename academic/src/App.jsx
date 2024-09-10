import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Front from './front'; // Login page
import StudentDashboard from './StudentDashboard'; // Student Dashboard component
import AdminDashboard from './AdminDashboard'; // Admin Dashboard component
import StudentResourceCard from './ShareResourceCard'; // Share Resource card component
import ApprovalLimbo from './ApprovalLimbo';

function App() {
  return (
    <Router>
      <Routes>
        {/* home page */}
        <Route path="/" element={<Front />} />

        {/* Dashboard */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* student resource */}
        <Route path="/share-resources" element={<StudentResourceCard />} />
         {/* student approval limbo */}
        <Route path="/approval-limbo" element={<ApprovalLimbo />} />


        {/* Route for the Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
