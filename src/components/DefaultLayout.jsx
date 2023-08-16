import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Sidebar from '../views/Sidebar'
import RightSide from '../views/RightSide'

function DefaultLayout() {

  const {user, token} = useStateContext()

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div className="AppLayout">
      <div className="AppGlass">
        <Sidebar />
        <Outlet />
        <RightSide />
      </div>
    </div>
  )
}

export default DefaultLayout