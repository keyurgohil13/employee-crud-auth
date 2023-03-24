import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee } from '../../services/actions/employee.action';
import './CreateEmp.css';
import { useNavigate } from 'react-router-dom';


function CreateEmp() {

    const navigate = useNavigate();
    const [initial, setInitial] = useState({
        fName: '',
        lName: '',
        pEmail: '',
        oEmail: '',
        contactNo: '',
        designation: '',
        gender: '',
        status: true
    });

    const { employeeList } = useSelector((state) => state.employeeReducer);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        // console.log(value);

        setInitial({ ...initial, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const uniId = employeeList.length > 0 ? employeeList[employeeList.length - 1].id - 100 : 0;
        console.log("uniqId", uniId);
        const data = { ...initial, id: uniId + 101 };
        console.log(data, ">>");
        dispatch(createEmployee(data));
        setInitial(
            {
                fName: '',
                lName: '',
                pEmail: '',
                oEmail: '',
                contactNo: '',
                designation: '',
                gender: '',
                status: true
            }
        )

        navigate('/');

    }
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col className='col-6'>
                        <h2 className='mb-3'>
                            Create Employee
                        </h2>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Row className='justify-content-center'>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        name='fName'
                                        value={initial.fName}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name='lName'
                                        value={initial.lName}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Personal Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter personal email"
                                        name='pEmail'
                                        value={initial.pEmail}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Official Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter official email"
                                        name='oEmail'
                                        value={initial.oEmail}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Contact No"
                                        name='contactNo'
                                        value={initial.contactNo}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Designation"
                                        name='designation'
                                        value={initial.designation}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                        {
                                            ['Male', 'Female'].map((label, index) => {
                                                return (
                                                    <div className='col-2' key={index}>
                                                        <Form.Check
                                                            type='radio'
                                                            label={label}
                                                            name="gender"
                                                            value={label}
                                                            checked={initial.gender === label}
                                                            onChange={(e) => handleChange(e)}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Form.Group>

                                <div className='col-3 text-center'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                                <div className='col-2'>
                                    <Button onClick={() => navigate('/')}>
                                        Back
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <img src='images/emplo.png' alt="emplo" className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateEmp