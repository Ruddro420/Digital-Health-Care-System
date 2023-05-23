import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Login = () => {
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
                                <h2>Sign In Here</h2>
                                <div style={{ marginTop: '20%' }} className="d-grid gap-2">
                                    <Button variant="outline-dark" size="md">
                                        Continue With Google
                                    </Button>
                                </div> <br />
                                <h6>If you are new create account first <Link to='/register'>Create Here</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;