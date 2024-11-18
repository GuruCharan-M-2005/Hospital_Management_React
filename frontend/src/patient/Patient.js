import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Patient.css';
import Sidebar from '../sidebar/sidebar';

const Patient = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/patients')
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
        <Sidebar/>
    <div className="patient-container">
      <h1>Patients</h1>
      <div className="card-container">
        {patients.map((patient) => (
          <div className="card" key={patient.id}>
            <h2>{patient.name}</h2>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Mobile:</strong> {patient.mobileNumber}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};

export default Patient;