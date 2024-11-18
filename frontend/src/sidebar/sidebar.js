import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => navigate('/patient')}>Patients</button>
        </li>
        <li>
          <button onClick={() => navigate('/doctor')}>Doctors</button>
        </li>
        <li>
          <button onClick={() => navigate('/appointment')}>Appointments</button>
        </li>
        <li>
          <button onClick={() => navigate('/contact')}>Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;