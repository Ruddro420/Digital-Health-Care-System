import { Link } from 'react-router-dom';
import './Hospital.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
const Hospital = () => {
    const hospitalData = [
        { id: 1, name: 'Update Rangpur', location: 'Rangpur,Bangladesh', phone: '01755232541', rating: '5' },
        { id: 2, name: 'Dhaka Medical', location: 'Dhaka,Bangladesh', phone: '01755232541', rating: '4' },
        { id: 3, name: 'Khulna Sadar', location: 'Khulna,Bangladesh', phone: '01755232541', rating: '3' },
        { id: 4, name: 'Bogra Medical', location: 'Bogra,Bangladesh', phone: '01755232541', rating: '2' },
        { id: 5, name: 'Medical College', location: 'ParkerMor,Bangladesh', phone: '01755232541', rating: '5' },
        { id: 6, name: 'Pulse Hospital', location: 'Gaibandha,Bangladesh', phone: '01755232541', rating: '2' },
    ]
    return (
        <div>
            <div className="main-heading">
                <Link to='/' >
                    <h3>DIGITAL HEALTH CARE</h3>
                </Link>
                <h1>FIND Hospital</h1>
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
                {/* Search Result */}
                <div className="container search-result-container">
                    <div className="row">
                        {
                            hospitalData.map(bloodItem =>
                                
                                <div key={bloodItem.id} className="col-4">
                                    <div className="card search-content">
                                        <div className="card-body">
                                            <span><b>H.Name: </b><span className='inner-text'>{bloodItem.name}</span></span> <br />
                                            <span><b>Location: </b><span className='inner-text'>{bloodItem.location}</span></span> <br />
                                            <span><b>Phone: </b><span className='inner-text'>{bloodItem.phone}</span></span> <br />
                                            <span><b>Rating: </b>
                                            <span className='inner-text'>
                                                {console.log(bloodItem.rating)}
                                            </span>
                                            </span> <br /><br />
                                        </div>
                                        <div className="row text-center">
                                                <div className="col">
                                                    <a className='btn btn-dark text-light' href="#"><BsFillTelephoneFill></BsFillTelephoneFill> Call Now</a>
                                                </div>
                                                <div className="col">
                                                    <a className='btn btn-danger text-light' href="#">Emergency</a>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hospital;