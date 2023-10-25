import { createBrowserRouter } from "react-router-dom";

// import dashboard component
import { ManageBlood, ManageHospital, ManageDoctors, ManageAmbulance, ManageMedicine, ManageEmergency, ManageDashboard, SideBar } from '../component/Dashboard';

// import page
import { Home, Login, Register, Error } from '../pages';

// import page component
import { Blood, Hospital, Doctors, Ambulance, Medicine, Emergency } from '../component/PageComponent';
import Protected from "../component/Protected/Protected";
import Notice from "../pages/Notice/Notice";
import MainAdmin from "../superAdmin/MainAdmin";
//import SuperDashboard from "../superAdmin/SuperDashboard";
import Dashboard from "../superAdmin/Dashboard/Dashboard";
import MainDash from "../superAdmin/Dashboard/MainDash";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blood",
    element: <Blood />,
  },
  {
    path: "/hospital",
    element: <Hospital />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/ambulance",
    element: <Ambulance />,
  },
  {
    path: "/medicine",
    element: <Medicine />,
  },
  {
    path: "/emergency",
    element: <Emergency />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/notice",
    element: <Protected>
      <Notice />
    </Protected>,
  },
  {
    path: "/dashboard",
    element: <Protected>
      <SideBar />
    </Protected>,
    children: [
      {
        path: '/dashboard/',
        element: <ManageDashboard />
      },
      {
        path: '/dashboard/addblood',
        element: <ManageBlood />
      },
      {
        path: '/dashboard/hospital',
        element: <ManageHospital />
      },
      {
        path: '/dashboard/doctors',
        element: <ManageDoctors />
      },
      {
        path: '/dashboard/ambulance',
        element: <ManageAmbulance />
      },
      {
        path: '/dashboard/medicine',
        element: <ManageMedicine />
      },
      {
        path: '/dashboard/emergency',
        element: <ManageEmergency />
      },
    ]
  },
  {
    path: '/admin-login',
    element: <MainAdmin />
  },
  {
    path: '/superDashboard',
    element: <Dashboard />,
    children: [
      {
        path: "/superDashboard/",
        element: <MainDash />,
      },
    ]
  },
  {
    path: "*",
    element: <Error />
  },
]);