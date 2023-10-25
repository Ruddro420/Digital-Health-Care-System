import Form from 'react-bootstrap/Form';
import SuperBlood from './SuperBlood';
import SuperAmbulance from './SuperAmbulance';
import SuperDoctor from './SuperDoctor';
import SuperMedicine from './SuperMedicine';
import SuperHospital from './SuperHospital';
import SuperEmergency from './SuperEmergency';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

const SuperDashboard = () => {
    const [selectData, setSelectData] = useState('')
    let temp;
    if (selectData === 'Manage Blood') {
        temp = <SuperBlood />
    } else if (selectData === 'Manage Ambulance') {
        temp = <SuperAmbulance />
    }
    else if (selectData === 'Manage Hospital') {
        temp = <SuperHospital />
    }
    else if (selectData === 'Manage Doctors') {
        temp = <SuperDoctor />
    }
    else if (selectData === 'Manage Medicine') {
        temp = <SuperMedicine />
    }
    else if (selectData === 'Manage Emergency') {
        temp = <SuperEmergency />
    } else {
        'Please Select Any Option'
    }

    return (
        <>
            <div className="superAdmin-Data-show">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <div className="col">
                                <Form.Select
                                    onChange={(e) => setSelectData(e.target.value)}
                                    aria-label="Default select example">
                                    <option>Open this select options</option>
                                    <option value="Manage Blood">Manage Blood</option>
                                    <option value="Manage Ambulance">Manage Ambulance</option>
                                    <option value="Manage Hospital">Manage Hospital</option>
                                    <option value="Manage Doctors">Manage Doctors</option>
                                    <option value="Manage Medicine">Manage Medicine</option>
                                    <option value="Manage Emergency">Manage Emergency</option>
                                </Form.Select>
                            </div>
                            {
                                <div className="col mt-5">
                                    <h3 className='mb-4'>{selectData}</h3>
                                    {
                                        temp ? temp : 'Please Select Any Option'
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );

};

export default SuperDashboard;