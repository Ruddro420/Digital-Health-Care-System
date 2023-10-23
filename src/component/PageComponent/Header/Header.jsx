import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Navbar bg='light'>
                <Container>
                    <Link to='/' >
                        <Navbar.Brand>DHCS</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                user?.email ? <Link className="btn btn-warning" to='/dashboard'>Dashboard</Link> : <Link to='/login'>Sign In</Link>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;