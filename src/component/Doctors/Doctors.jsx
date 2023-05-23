import { Link } from 'react-router-dom';
import './Doctors.css'
import { BsFillTelephoneFill, BsStar } from 'react-icons/bs';
const Doctors = () => {
    const doctosData = [
        { id: 1, name: 'Ali Raju', location: 'Rangpur,Bangladesh',  specialist: 'Medicine Specialist',  phone: '01755232541', rating: '5' },
        { id: 2, name: 'Sadman Khan', location: 'Dhaka,Bangladesh',  specialist: 'Medicine Specialist', phone: '01755232541', rating: '4' },
        { id: 3, name: 'Jack Ali', location: 'Khulna,Bangladesh',  specialist: 'Medicine Specialist', phone: '01755232541', rating: '3' },
        { id: 4, name: 'Rabindra Khan', location: 'Bogra,Bangladesh',  specialist: 'Medicine Specialist', phone: '01755232541', rating: '2' },
        { id: 5, name: 'Ostab Dob', location: 'ParkerMor,Bangladesh',  specialist: 'Medicine Specialist', phone: '01755232541', rating: '5' },
        { id: 6, name: 'Daniale Seikh', location: 'Gaibandha,Bangladesh',  specialist: 'Medicine Specialist', phone: '01755232541', rating: '2' },
    ]
    return (
        <div>
            <div className="main-heading">
                <Link to='/' >
                    <h3>DIGITAL HEALTH CARE</h3>
                </Link>
                <h1>FIND DOCTORS</h1>
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
                            doctosData.map(bloodItem =>

                                <div key={bloodItem.id} className="col-4">
                                    <div className="card search-content">
                                        <div className="card-body">
                                            <span><b>D.Name: </b><span className='inner-text'>{bloodItem.name}</span></span> <br />
                                            <span><b>Location: </b><span className='inner-text'>{bloodItem.location}</span></span> <br />
                                            <span><b>Phone: </b><span className='inner-text'>{bloodItem.phone}</span></span> <br />
                                            <span><b>Specialist: </b><span className='inner-text'>{bloodItem.specialist}</span></span> <br />
                                            <span><b>Rating: </b>
                                                <span className='inner-text'>
                                                    {bloodItem.rating} <BsStar></BsStar>
                                                </span>
                                            </span> <br /><br />
                                        </div>
                                        <div className="row text-center">
                                            <div className="col">
                                                <a className='btn btn-dark text-light' href="#"><BsFillTelephoneFill></BsFillTelephoneFill> Call Now</a>
                                            </div>
                                            <div className="col">
                                                <a className='btn btn-danger text-light' href="#">Appointment</a>
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

export default Doctors;