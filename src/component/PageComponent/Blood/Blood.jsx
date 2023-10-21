import { Form, InputGroup } from 'react-bootstrap';
import './Blood.css'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Blood = () => {

// For Location
const [searchLocation, setSearchLocation] = useState('');
// For Blood
const [searchBlood, setSearchBlood] = useState('');

console.log(searchLocation,searchBlood);

    const bloodData = [
        { id: 1, name: 'Ali Fiad Ruddro', location: 'Rangpur,Bangladesh', bloodGroup: 'O+', lastDate: '05/23/2023' },
        { id: 2, name: 'Raju Ahmed', location: 'Dhaka,Bangladesh', bloodGroup: 'A+', lastDate: '05/3/2022' },
        { id: 3, name: 'Rayhan Sarkar', location: 'Khulna,Bangladesh', bloodGroup: 'AB+', lastDate: '01/23/2021' },
        { id: 4, name: 'John Carnof Le', location: 'Bogra,Bangladesh', bloodGroup: 'O-', lastDate: '03/2/2023' },
        { id: 5, name: 'Rashid Hoosen', location: 'ParkerMor,Bangladesh', bloodGroup: 'B+', lastDate: '05/12/2020' },
        { id: 6, name: 'Abdul Rahman', location: 'Gaibandha,Bangladesh', bloodGroup: 'A+', lastDate: '01/2/2023' },
    ]
    return (
        <div>
            <div className="main-heading">
                <Link to='/' >
                    <h3>DIGITAL HEALTH CARE</h3>
                </Link>
                <h1>FIND BLOOD</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="search-container">
                            <InputGroup className="mb-3 custom-input">
                                <InputGroup.Text id="basic-addon1">
                                    <BsFillSearchHeartFill />
                                </InputGroup.Text>
                                <Form.Control
                                    onChange={(e)=> setSearchLocation(e.target.value.toLowerCase())}
                                    placeholder="Find Location"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3 custom-input">
                                <InputGroup.Text id="basic-addon1">
                                    <BsFillSearchHeartFill />
                                </InputGroup.Text>
                                <Form.Select
                                onChange={(e)=> setSearchBlood(e.target.value.toLowerCase())}
                                 aria-label="Default select example">
                                    <option value=''>Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </Form.Select>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                {/* Search Result */}
                <div className="container search-result-container">
                    <div className="row">
                        {
                            bloodData.filter((bloodItem)=> 
                            
                            bloodItem.location.toLowerCase().includes(searchLocation)
                            &&
                            bloodItem.bloodGroup.toLowerCase().includes(searchBlood)

                            )
                            .map(bloodItem =>
                                <div key={bloodItem.id} className="col-4">
                                    <div className="card search-content">
                                        <div className="card-body">
                                            <span><b>Name: </b><span className='inner-text'>{bloodItem.name}</span></span> <br />
                                            <span><b>Location: </b><span className='inner-text'>{bloodItem.location}</span></span> <br />
                                            <span><b>Blood Group: </b><span className='inner-text'>{bloodItem.bloodGroup}</span></span> <br />
                                            <span><b>Last Date: </b><span className='inner-text'>{bloodItem.lastDate}</span></span> <br /><br />
                                        </div>
                                        <div className='search-container-button'>
                                            <a href="#"><BsFillTelephoneFill></BsFillTelephoneFill> Call Now</a>
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

export default Blood;