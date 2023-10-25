import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import toast from "react-hot-toast";
import { BsFillCheckCircleFill, BsFillXSquareFill } from "react-icons/bs";

const SuperHospital = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getSAhospital')
            .then(function (response) {
                setData(response.data.info);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [loading])
    // approve data
    const confirmData = (id) => {
        axios.post(`http://127.0.0.1:8000/api/updateHospital/${id}`)
            // eslint-disable-next-line no-unused-vars
            .then(function (response) {
                setLoading(true)
                toast.success("Data Update")
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>H.Name</th>
                        <th>Phone</th>
                        <th>Emergency No</th>
                        <th>License No</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Terms</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{item.hospital_name}</td>
                                    <td>{item.phone_no}</td>
                                    <td>{item.emergency_no}</td>
                                    <td>{item.license_no}</td>
                                    <td>{item.address}</td>
                                    <td>{item.state}</td>
                                    <td>{item.zip}</td>
                                    <td>{item.aggree}</td>
                                    <td>{item.status == 1 ? <button className="btn btn-success">Approve</button> : <button className="btn btn-danger">Pending</button>}</td>
                                    <td>
                                        {
                                            item.status == 1 ?
                                                <span className="btn btn-danger" onClick={() => confirmData(item.id)}><BsFillXSquareFill /></span>
                                                :
                                                <span className="btn btn-success" onClick={() => confirmData(item.id)}>
                                                    <BsFillCheckCircleFill />
                                                </span>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default SuperHospital;