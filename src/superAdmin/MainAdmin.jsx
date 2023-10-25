
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const MainAdmin = () => {

    // context data
    const { superEmail, superPass, setSuperEmail, setSuperPass } = useContext(AuthContext);
    // navigate
    const navigate = useNavigate()
    // handler function
    const superAdminHandler = (e) => {
        e.preventDefault();

        if (superEmail === 'super@admin.com' && superPass === 'xxxx') {
            navigate('/superDashboard')
        } else {
            toast.error('Invalid Email or Password')
            // navigate('/admin-login')
        }

    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-5  m-5">
                            <div className="card-title text-center">
                                <h2>Admin Login</h2>
                            </div>
                            <div className="card-bod">
                                <Form onSubmit={superAdminHandler}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={(e) => setSuperEmail(e.target.value)}
                                            required
                                        />
                                        <Form.Text className="text-muted">
                                            We will never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setSuperPass(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="success" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default MainAdmin;