import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Blood from './component/Blood/Blood.jsx';
import Hospital from './component/Hospital/Hospital.jsx';
import Doctors from './component/Doctors/Doctors.jsx';
import Ambulance from './component/Ambulance/Ambulance.jsx';
import Medicine from './component/Medicine/Medicine.jsx';
import Emergency from './component/Emergency/Emergency.jsx';
import Error from './component/Error/Error.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/blood",
    element: <Blood></Blood>,
  },
  {
    path: "/hospital",
    element: <Hospital></Hospital>,
  },
  {
    path: "/doctors",
    element: <Doctors></Doctors>,
  },
  {
    path: "/ambulance",
    element: <Ambulance></Ambulance>,
  },
  {
    path: "/medicine",
    element: <Medicine></Medicine>,
  },
  {
    path: "/emergency",
    element: <Emergency></Emergency>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element:<Error></Error>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
