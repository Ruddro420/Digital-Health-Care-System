import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <div>
            <header>
                <div className="header-wrapper">
                    <label htmlFor="menu-toggle">
                        <span className="las la-bars"></span>
                    </label>
                    <div className="header-title">
                        <h1>Analytics</h1>
                        <p>WELCOME TO SUPER ADMIN DASHBOARD <span className="las la-chart-line"></span></p>
                    </div>
                </div>
                <div className="header-action">
                    <Link to='/admin-login' className="btn btn-main userButton">
                        Logout
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default DashHeader;