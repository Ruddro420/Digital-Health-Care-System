import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { BsFillCheckCircleFill } from "react-icons/bs";

const SuperBlood = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getBlood')
            .then(function (response) {
                setData(response.data.info);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    // approve data
    const confirmData = (id) => {
        console.log(id);
        axios.post(`http://127.0.0.1:8000/api/updateData/${id}`)
            .then(function (response) {
                setData(response.data.info);
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
                        <th>D.Date</th>
                        <th>B.Group</th>
                        <th>D.Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Corona</th>
                        <th>Hepatitis</th>
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
                                    <td>{item.donate_date}</td>
                                    <td>{item.blood_group}</td>
                                    <td>{item.donor_name}</td>
                                    <td>{item.phone_no}</td>
                                    <td>{item.address}</td>
                                    <td>{item.corona}</td>
                                    <td>{item.hepatitis}</td>
                                    <td>{item.aggree}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <span onClick={() => confirmData(i)}>
                                            <BsFillCheckCircleFill />
                                        </span>
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

export default SuperBlood;