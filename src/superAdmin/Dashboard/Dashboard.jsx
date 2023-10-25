import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import Sidebar from "./Sidebar";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <input type="checkbox" name="" id="menu-toggle" />
            <div className="overlay"><label htmlFor="menu-toggle">
            </label></div>
            <Sidebar />
            <div className="main-content">
                <DashHeader />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;