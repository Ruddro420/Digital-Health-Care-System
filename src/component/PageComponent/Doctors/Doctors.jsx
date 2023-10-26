import { Link } from 'react-router-dom';
import { BsFillTelephoneFill, BsStar } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Doctors = () => {
    // For Location
    const [searchLocation, setSearchLocation] = useState('');
    const [doctosData, setDoctosData] = useState([]);
    // base url
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${BASE_URL}/api/getDoctor`)
            .then(function (response) {
                setDoctosData(response.data.info);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
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
                            <div>
                                <input
                                    onChange={(e) => setSearchLocation(e.target.value.toLowerCase())}
                                    className='form-control custom-input' type="search" name="" id="" placeholder='Find Location ...' /> <br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search Result */}
                <div className="container search-result-container">
                    <div className="row">
                        {
                            doctosData.filter((bloodItem) => bloodItem.address.toLowerCase().includes(searchLocation)).map(item =>
                                <div key={item.id} className="col-4">
                                    <div className="card search-content">
                                        <div className="card-body">
                                            <span><b>D.Name: </b><span className='inner-text'>{item.doctors_name}</span></span> <br />
                                            <span><b>Location: </b><span className='inner-text'>{item.address} ,{item.state}</span></span> <br />
                                            <span><b>Phone: </b><span className='inner-text'>{item.phone_no}</span></span> <br />
                                            <span><b>Specialist: </b><span className='inner-text'>{item.specialist}</span></span> <br />
                                            <span><b>Rating: </b>
                                                <span className='inner-text'>
                                                    {item.rating} <BsStar></BsStar>
                                                </span>
                                            </span> <br /><br />
                                        </div>
                                        <div className="row text-center">
                                            <div className="col">
                                                <a className='btn btn-dark text-light' href={`tel:${item.phone_no}`}><BsFillTelephoneFill></BsFillTelephoneFill> Call Now</a>
                                            </div>
                                            <div className="col">
                                                <a className='btn btn-danger text-light' href={`tel:${item.phone_no}`}>Appointment</a>
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