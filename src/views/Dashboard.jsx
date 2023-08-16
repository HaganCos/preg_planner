import React from 'react'
import DashboardCards from './Dashboard/cards/DashboardCards'
import './css/dashboard.css'
import Table from './Dashboard/table/Table'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>DashBoard</h1>
      <DashboardCards />
      <Table />
    </div>
  )
}

export default Dashboard