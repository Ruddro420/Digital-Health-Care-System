import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
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
                            {/* Signed in as: */} <Link to='/login'>Sign In</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;