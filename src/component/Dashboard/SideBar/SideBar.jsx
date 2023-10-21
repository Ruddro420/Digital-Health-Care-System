import { Dropdown, DropdownButton } from 'react-bootstrap';
import './SideBar.css'
import { Link, Outlet } from 'react-router-dom';
const SideBar = () => {
    return (
        <>
            <div>
                <header>
                    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white shadow">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 mt-4">
                                <div className="list-item mt-5 mb-3 border shadow p-3 rounded">
                                    <Link to='/dashboard'>
                                        Manage Dashboard
                                    </Link>
                                </div>
                                <div className="list-item shadow">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Blood">
                                        <Link to='/dashboard/addblood'>
                                            <div className='dropdown-item'>
                                                Add Blood
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                                <div className="list-item shadow mt-5">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Hospital">
                                        <Link to='/dashboard/hospital'>
                                            <div className='dropdown-item'>
                                                Add Hospital
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                                <div className="list-item shadow mt-5">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Doctors">
                                        <Link to='/dashboard/doctors'>
                                            <div className='dropdown-item'>
                                                Add Doctors
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                                <div className="list-item shadow mt-5">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Ambulance">
                                        <Link to='/dashboard/ambulance'>
                                            <div className='dropdown-item'>
                                                Add Ambulance
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                                <div className="list-item shadow mt-5">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Medicine">
                                        <Link to='/dashboard/medicine'>
                                            <div className='dropdown-item'>
                                                Add Medicine
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                                <div className="list-item shadow mt-5">
                                    <DropdownButton id="dropdown-basic-button" title="Manage Emergency">
                                        <Link to='/dashboard/emergency'>
                                            <div className='dropdown-item'>
                                                Add Emergency
                                            </div>
                                        </Link>
                                    </DropdownButton>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-3">

                        <div className="container-fluid">

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"
                                data-mdb-target="#sidebarMenu"
                                aria-controls="sidebarMenu"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            <Link to='/dashboard'>
                                <h2 className="navbar-brand">Welcome to DHCS System</h2>
                            </Link>
                            <ul className="navbar-nav ms-auto d-flex flex-row">
                                <li className="nav-item dropdown">
                                    <DropdownButton id="dropdown-basic-button" title='Name'>
                                        <Dropdown.Item href="#/action-1">email@gmai.com</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                    </DropdownButton>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main style={{ marginTop: '58px' }}>
                    <div className="container pt-4">
                        <Outlet></Outlet>
                    </div>
                </main>
            </div>
        </>
    );
};

export default SideBar;