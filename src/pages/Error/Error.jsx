import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Alert variant="danger">
                <Alert.Heading>404 ERROR</Alert.Heading>
                <p>
                Hey, nice to see you
                </p>
                <hr />
                <p className="mb-0">
                    Back to Home - <Link to='/' >Home</Link>
                </p>
            </Alert>
        </div>
    );
};

export default Error;