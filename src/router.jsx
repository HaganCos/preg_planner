import { Navigate, createBrowserRouter } from "react-router-dom"
import Login from "./views/Login"
import Users from "./views/Users"
import Signup from "./views/Signup"
import NotFound from "./views/NotFound"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout"
import Dashboard from "./views/Dashboard"
import Appointment from "./views/Appointment"
import Vitals from "./views/Vitals"
import Pregnancy from "./views/Pregnancy"
import Journal from "./views/Journal"

const router = createBrowserRouter([
  {
    path: '/preg_planner/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/appointment',
        element: <Appointment />
      },
      {
        path: '/vitals',
        element: <Vitals />
      },
      {
        path: '/pregnancy',
        element: <Pregnancy />
      },
      {
        path: '/journal',
        element: <Journal />
      },

    ]
  },

  {
    path: '/preg_planner/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },
 

  {
    path: '*',
    element: <NotFound />
  },
])

export default router