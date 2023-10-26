import { useEffect, useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { Table } from "react-bootstrap";

const Blood = () => {
    // login info
    const { user } = useContext(AuthContext)
    const [getData, setGetData] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('')
    // base url
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get(`${BASE_URL}/api/getOnlyBlood/${user.uid}`)
            .then(function (response) {
                setGetData(response.data.info)
            })
            .catch(function (error) {
                setError(error);
            })
    }, [user.uid])



    return (
        <div>
            <h2 className='mt-5 mb-3'>Manage Blood</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Donor Name</th>
                        <th>Last Date</th>
                        <th>Blood Group</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.length == 0 ? <tr><td colSpan={5} className='text-center'>No Data Found <span className='text-danger'>(Please add data what you want)</span></td></tr> :
                            getData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.donor_name}</td>
                                        <td>{item.donate_date}</td>
                                        <td>{item.blood_group}</td>
                                        <td><span className='btn btn-danger'>{item.status == 0 ? 'Pending' : 'Active'}</span></td>
                                    </tr>
                                )
                            })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Blood;