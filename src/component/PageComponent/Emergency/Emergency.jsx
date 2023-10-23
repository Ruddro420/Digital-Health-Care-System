import { Link } from 'react-router-dom';
import './Emergency.css'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillTelephoneFill, BsStar } from 'react-icons/bs';
import { AuthContext } from '../../../context/AuthContext';
const Emergency = () => {
    // For Location
    const [searchLocation, setSearchLocation] = useState('');
    const [emergencyData, setEmergencyData] = useState([]);
    // get location
    const { latitude, longitude } = useContext(AuthContext)


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getEmergency')
            .then(function (response) {
                setEmergencyData(response.data.info);
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
                <h1>FIND EMERGENCY</h1>
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
                            emergencyData.filter((searchItem) => searchItem.address.toLowerCase().includes(searchLocation)).map(item =>

                                <div key={item.id} className="col-4">
                                    <div className="card search-content">
                                        <div className="card-body">
                                            <span><b>Name: </b><span className='inner-text'>{item.name}</span></span> <br />
                                            <span><b>Location: </b><span className='inner-text'>{item.address} ,{item.state}</span></span> <br />
                                            <span><b>Phone: </b><span className='inner-text'>{item.phone_no}</span></span> <br />
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
                                                <a
                                                    target='_blank'
                                                    href={`https://www.google.com/maps/dir/${latitude},${longitude}/${item.address}/`}
                                                    rel="noreferrer"
                                                    className='btn btn-warning text-dark'

                                                >Location</a>
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

export default Emergency;