import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const SuperMedicine = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getMedicine')
            .then(function (response) {
                setData(response.data.info);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>S.Name</th>
                        <th>Phone</th>
                        <th>Shop Owner</th>
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
                                    <td>{item.shop_name}</td>
                                    <td>{item.phone_no}</td>
                                    <td>{item.owner_name}</td>
                                    <td>{item.license_no}</td>
                                    <td>{item.address}</td>
                                    <td>{item.state}</td>
                                    <td>{item.zip}</td>
                                    <td>{item.aggree}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default SuperMedicine;