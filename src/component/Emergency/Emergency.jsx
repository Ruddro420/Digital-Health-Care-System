import { Link } from 'react-router-dom';
import './Emergency.css'
const Emergency = () => {
    return (
        <div>
            <div className="main-heading">
                <Link to='/' >
                    <h3>DIGITAL HEALTH CARE</h3>
                </Link>
                <h1>FIND EMERGENCY</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="search-container">
                            <form action="">
                                <div>
                                    <input className='form-control custom-input' type="search" name="" id="" placeholder='Find Location ...' /> <br />
                                </div>
                                <div className="search-button">
                                    <button>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;