import React from 'react'
import Login from './login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Appointment from './appointment/Appointment'
import Contact from './contact/Contact'
import Doctor from './doctor/Doctor'
import Patient from './patient/Patient'
import Dashboard from './dashboard/Dashboard'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/patient" element={<Patient />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  )
}
