import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Doctor.css';
import Sidebar from '../sidebar/sidebar';

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/doctors')
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
        <Sidebar/>
    <div className="doctor-container">
      <h1>Doctors</h1>
      <div className="card-container">
        {doctors.map((doctor) => (
          <div className="card" key={doctor.id}>
            <h2>{doctor.name}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Contact:</strong> {doctor.contact}</p>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default Doctor;