import React from 'react'
import './css/Vitals.css'
import VitalsCard from './Vitals/cards/VitalsCard'
import Table from './Vitals/table/VitalsTable'
import AddVitals from './Vitals/addVitals/AddVitals'

const Vitals = () => {
  return (
   <div className="vitals">
      <h1>Vitals</h1>
      <VitalsCard />
      <AddVitals />
      <Table />
   </div>
  )
}

export default Vitals