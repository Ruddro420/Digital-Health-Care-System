import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
const ManageBlood = () => {
    const [validated, setValidated] = useState(false);
    const [date, setDate] = useState(null);
    const [blood, setBlood] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [corona, setCorona] = useState(null);
    const [hepatities, setHepatities] = useState(null);
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
        }
        else {
            // POST REQUEST
            axios.post(`${BASE_URL}/api/storeBlood`, {
                uid: user.uid,
                donate_date: date,
                blood_group: blood,
                donor_name: name,
                phone_no: phone,
                address: address,
                state: state,
                zip: zip,
                corona: corona,
                hepatitis: hepatities,
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
                <h2>Add Your Blood Information</h2>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Last Donate Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="First name"
                            defaultValue="Mark"
                            name="donate_date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Select Blood Group</Form.Label>
                        <Form.Select
                            onChange={(e) => setBlood(e.target.value)}
                            required
                            aria-label="Default select example" name='blood_group'>
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
                        <Form.Control.Feedback type="invalid">
                            Please choose blood group.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Donor Name</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Donor Name"
                                aria-describedby="inputGroupPrepend"
                                required
                                name='donor_name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a name.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Valid Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            name='address'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            required
                            name='state'
                            onChange={(e) => setState(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                            name='zip'
                            onChange={(e) => setZip(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* Other Information */}
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='mt-3'>Corona Testing</Form.Label>
                        <Form.Select
                            onChange={(e) => setCorona(e.target.value)}
                            required
                            aria-label="Default select example" name='corona'>
                            <option value=''>Select One</option>
                            <option value="Positive">Corona Positive (+)</option>
                            <option value="Negative">Corona Negative (-)</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please choose corona infromation.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='mt-3'>Hepatitis B Testing</Form.Label>
                        <Form.Select
                            onChange={(e) => setHepatities(e.target.value)}
                            required
                            aria-label="Default select example" name='hepatitis'>
                            <option value=''>Select Hepatitis B</option>
                            <option value="A+">Hepatitis B Positive (+)</option>
                            <option value="B+">Hepatitis B Negative (-)</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please choose Hepatitis B infromation.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='mt-3'>Phone No</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Phone Number"
                            required
                            name='phon'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
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

export default ManageBlood;