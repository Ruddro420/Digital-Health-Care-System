import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
    // Get today's date
    const today = new Date();
    // Format the date as a string
    const formattedDate = today.toDateString();
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="brand">
                        <h3>
                            <span className="lab la-staylinked"></span>
                            DHCS
                        </h3>
                    </div>
                    <div className="sidebar-avatar">
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/06/24/89/75/360_F_624897595_ofLf2oLGj0HncCIx6w5n3gvaU6XiM46D.jpg" alt="avatar" />
                        </div>
                        <div className="avatar-info">
                            <div className="avatar-text">
                                <h4>Super Admin</h4>
                                <small>{formattedDate}</small>
                            </div>
                            <span className="las la-angle-double-down"></span>
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            <li>
                                <NavLink to="/superDashboard" ><span className="material-symbols-outlined">
                                    dashboard
                                </span><span className="dashh-text">Dashboard</span></NavLink>
                            </li>
                            {/*  <li>
                                <NavLink to="/dashboard/category" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        add_circle
                                    </span>
                                    <span className="dashh-text">Add Cateogory</span>
                                </NavLink>
                            </li> */}
                            {/*  <li>
                                <NavLink to="/dashboard/order" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                    <span className="dashh-text">Order Details</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/analytics" className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }>
                                    <span className="material-symbols-outlined">
                                        inventory
                                    </span>
                                    <span className="dashh-text">Analytics</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <div className="sidebar-card">
                        <div>
                            <Link to='/' className="btn btn-main btn-block mb-5 addButton">Back Home</Link>
                            <h4>Make Fun !</h4>
                            <p>Smile is most beautiful things</p>
                            <button className="btn btn-main btn-block mb-5 mt-5 listButton">Thank You</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;