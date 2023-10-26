import Form from 'react-bootstrap/Form';
import { Ambulance, Blood, Doctor, Emergency, Hospital, Medicine } from './index'
import { useState } from 'react';
import './ManageDashboard.css'

const ManageDashboard = () => {
  const [selectData, setSelectData] = useState('')
  let temp;
  if (selectData === 'Manage Blood') {
    temp = <Blood />
  } else if (selectData === 'Manage Ambulance') {
    temp = <Ambulance />
  }
  else if (selectData === 'Manage Hospital') {
    temp = <Hospital />
  }
  else if (selectData === 'Manage Doctors') {
    temp = <Doctor />
  }
  else if (selectData === 'Manage Medicine') {
    temp = <Medicine />
  }
  else if (selectData === 'Manage Emergency') {
    temp = <Emergency />
  } else {
    'Please Select Any Option'
  }
  return (
    <div className='admin-dashboard-container'>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="show-data">
                <h3>Select Your Uploaded Data</h3>
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
    </div>
  );
};

export default ManageDashboard;