import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
const ManageDoctors = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [specialist, setSpecialist] = useState(null);
    const [license, setLicense] = useState(null);
    const [address, setAddress] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const navigate = useNavigate()
    // login info
    const { user } = useContext(AuthContext)
    // base url
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // POST REQUEST
            axios.post(`${BASE_URL}/api/storeDoctor`, {
                uid: user.uid,
                doctors_name: name,
                phone_no: phone,
                specialist: specialist,
                license_no: license,
                address: address,
                state: state,
                zip: zip,
            })
                // eslint-disable-next-line no-unused-vars
                .then(function (response) {
                    toast.success('Add Successfully')
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000)
                })
                .catch(function (error) {
                    toast.error('Something went wrong')
                    console.log(error);
                });
        }
        setValidated(true);

    };
    return (
        <div>
            <div className='dashboard-heading border mt-2 mb-5 p-4 rounded shadow bg-dark text-light'>
                <h2>Add Doctors Information</h2>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Doctors Name</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                aria-describedby="inputGroupPrepend"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Doctors Phone No</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="number"
                                placeholder="Phone Number"
                                aria-describedby="inputGroupPrepend"
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Specialist</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Specialist"
                                aria-describedby="inputGroupPrepend"
                                onChange={(e) => setSpecialist(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label>Doctors License No</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="number"
                                placeholder="License No"
                                aria-describedby="inputGroupPrepend"
                                onChange={(e) => setLicense(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Valid Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            onChange={(e) => setState(e.target.value)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            onChange={(e) => setZip(e.target.value)}
                            required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
};

export default ManageDoctors;