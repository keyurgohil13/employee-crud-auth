import React, { Fragment, useEffect } from 'react';
import './ViewEmployee.css';
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployee, deleteEmployee, getEmployeeInfo } from '../../services/actions/employee.action';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';


function ViewEmployee() {

    const navigate = useNavigate();
    const { employeeList } = useSelector((state) => state.employeeReducer);
    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getEmployee());
    }

    const handleEdit = (id) => {
        navigate(`/editEmp/${id}`);
        dispatch(getEmployeeInfo(id));
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <Container className='mt-2'>
                <Row className='justify-content-between'>
                    <div className='col-6'>
                        <h3>
                            Employee List
                        </h3>
                    </div>
                    <div className='col-2'>
                        <Button onClick={() => navigate('/createEmp')}>
                            Create Emp
                        </Button>
                    </div>
                    <hr />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Designation</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeList.map((employee, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <tr>
                                                <td rowSpan='2'>
                                                    {
                                                        employee.id
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        employee.fName + ' ' + employee.lName
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        employee.pEmail
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        employee.contactNo
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        employee.designation
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    {
                                                        employee.gender
                                                    }
                                                </td>
                                                <td rowSpan='2'>
                                                    <Form>
                                                        {
                                                            employee.status ?
                                                                <Form.Check
                                                                    type="switch"
                                                                    id={index}
                                                                    checked
                                                                /> :
                                                                <Form.Check
                                                                    type="switch"
                                                                    id={index}
                                                                />
                                                        }

                                                    </Form>
                                                </td>
                                                <td rowSpan="2">
                                                    <Button onClick={() => handleEdit(employee.id)}>
                                                        <PencilSquare />
                                                    </Button>
                                                    &nbsp;&nbsp;
                                                    <Button variant='danger' onClick={() => dispatch(deleteEmployee(employee.id))}>
                                                        <Trash />
                                                    </Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    {
                                                        employee.oEmail
                                                    }
                                                </td>
                                            </tr>
                                        </Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default ViewEmployee