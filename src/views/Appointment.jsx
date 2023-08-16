import React from 'react'
import AppointmentCards from './Appointment/cards/AppointmentCards'
import './css/Appointment.css'
import Table from './Appointment/table/Table'

const Appointment = () => {
  return (
    <div className="Appointment">
      <h1>Appointment</h1>
      <AppointmentCards />
      <Table />
    </div>
  )
}

export default Appointment