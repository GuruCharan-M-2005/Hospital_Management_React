import React, { useState } from 'react';
import '../Form.css'; // Import the same CSS file used for Login
import Sidebar from '../sidebar/sidebar';
import axios from 'axios';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = ( event) => {
    event.preventDefault();
    const appointmentData = {
      patientName,
      address,
      mobileNumber,
      doctorName,
      date,
      time,
    };
  
    axios.post('http://localhost:3000/appointments', appointmentData)
      .then((response) => {
        console.log(response.data);
        setAddress("");
        setDate("");
        setDoctorName("");
        setMobileNumber("");
        setPatientName("");
        setTime("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
        <Sidebar/>
    
    <div className="form-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Mobile Number:
          <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </label>
        <label>
          Doctor Name:
          <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} required />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
    </div>
  );
};

export default Appointment;