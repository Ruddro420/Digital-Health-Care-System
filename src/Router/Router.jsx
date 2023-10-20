import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Blood from "../component/Blood/Blood";
import Hospital from "../component/Hospital/Hospital";
import Doctors from "../component/Doctors/Doctors";
import Ambulance from "../component/Ambulance/Ambulance";
import Medicine from "../component/Medicine/Medicine";
import Emergency from "../component/Emergency/Emergency";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import ManageDashboard from "../component/Dashboard/ManageDashboard/ManageDashboard";
import ManageBlood from "../component/Dashboard/ManageBlood/ManageBlood";
import Error from "../component/Error/Error";
import SideBar from "../component/Dashboard/SideBar/SideBar";
import ManageHospital from "../component/Dashboard/ManageHospital/ManageHospital";

export const router = createBrowserRouter([
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
    path: "/dashboard",
    element: <SideBar></SideBar>,
    children: [
      {
        path: '/dashboard/addblood',
        element: <ManageBlood></ManageBlood>
      },
      {
        path: '/dashboard/doctors',
        element: <ManageHospital />
      },
      {
        path: '/dashboard/',
        element: <ManageDashboard></ManageDashboard>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);