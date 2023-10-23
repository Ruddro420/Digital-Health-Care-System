import { Link } from "react-router-dom";

const Notice = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card p-5">
                            <div className="card-body text-center">
                                <h5 className="card-title">Welcome To Digital Health Care System</h5>
                                <p className="card-text">You Are On !!</p>
                                <Link to='/' className='btn btn-dark text-light'>Enjoy Fun !</Link>
                                <Link to='/dashboard' className='btn btn-info text-light ms-5'>Go Dashboard !</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notice;