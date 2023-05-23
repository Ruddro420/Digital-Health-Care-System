import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Register = () => {
    return (
        <div>
            <Header></Header>
            <div style={{ marginTop: '20%' }} className="container">
                <div className="row">
                    <div style={{
                        width: '500px',
                        margin: 'auto',
                        height: '300px',
                    }} className="card">
                        <div className="card-body">
                            <div className="col text-center">
                                <h2>Sign Up Here</h2>
                                <div style={{ marginTop: '20%' }} className="d-grid gap-2">
                                    <Button variant="outline-dark" size="md">
                                        Continue With Google
                                    </Button>
                                </div> <br />
                                <h6>If you have an acoount please login <Link to='/login'>Login Here</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;