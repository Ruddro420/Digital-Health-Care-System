import { Form, InputGroup } from 'react-bootstrap';
import './Blood.css'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blood = () => {

    // For Location
    const [searchLocation, setSearchLocation] = useState('');
    // For Blood
    const [searchBlood, setSearchBlood] = useState('');
    const [bloodData, setBloodData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getBlood')
            .then(function (response) {
                setBloodData(response.data.info);
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
                                    onChange={(e) => setSearchLocation(e.target.value.toLowerCase())}
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
                                    onChange={(e) => setSearchBlood(e.target.value.toLowerCase())}
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
                            bloodData.filter((bloodItem) =>

                                bloodItem.address.toLowerCase().includes(searchLocation)
                                &&
                                bloodItem.blood_group.toLowerCase().includes(searchBlood)

                            )
                                .map(bloodItem =>
                                    <div key={bloodItem.id} className="col-4">
                                        <div className="card search-content">
                                            <div className="card-body">
                                                <span><b>Name: </b><span className='inner-text'>{bloodItem.donor_name}</span></span> <br />
                                                <span><b>Location: </b><span className='inner-text'>{bloodItem.address} ,{bloodItem.state}</span></span> <br />
                                                <span><b>Blood Group: </b><span className='inner-text'>{bloodItem.blood_group}</span></span> <br />
                                                <span><b>Last Date: </b><span className='inner-text'>{bloodItem.donate_date}</span></span> <br /><br />
                                            </div>
                                            <div className='search-container-button'>
                                                <a href={`tel:${bloodItem.phone_no}`}><BsFillTelephoneFill></BsFillTelephoneFill> Call Now</a>
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