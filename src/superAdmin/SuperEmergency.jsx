import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import toast from "react-hot-toast";
import { BsFillCheckCircleFill, BsFillXSquareFill } from "react-icons/bs";

const SuperEmergency = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    // base url
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${BASE_URL}/api/getSAemergency`)
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
        axios.post(`${BASE_URL}/api/updateEmergency/${id}`)
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
                        <th>E.Name</th>
                        <th>Phone</th>
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
                                    <td>{item.name}</td>
                                    <td>{item.phone_no}</td>
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

export default SuperEmergency;