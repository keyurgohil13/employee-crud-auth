import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUpInitiate } from '../../services/actions/auth.action';
// import { signup } from '../../services/actions/auth2.action';
import './SignUp.css';

function SignUp() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.authReducer);
    const [initial, setInitial] = useState({
        email: '',
        password: '',
        cpassword: ''
    });
    const [isErr, setErr] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (initial.cpassword === initial.password && initial.password !== '') {
            setErr(false);
            dispatch(signUpInitiate(initial.email, initial.password));
        } else {
            setErr(true);
        }
    }

    if (user !== null) {
        navigate('/');
    } else {

        return (
            <>
                <div className='position-fixed top-0 start-0 vw-100 vh-100 d-flex justify-content-center align-items-center bg-white'>
                    <div className='form-container rounded p-5'>
                        <div className='text-white'>
                            <h3 className='pb-3 border-bottom border-primary'>
                                SignUp
                            </h3>

                        </div>
                        <div className='mb-2'>
                            {
                                isErr &&
                                <p className='text-danger'>
                                    Password didn't match
                                </p>
                            }
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" name='cpassword' value={initial.cpassword} onChange={(e) => handleChange(e)} />
                                </Form.Group>

                                <Form.Group className='text-center'>
                                    <Button variant="primary" type="submit">
                                        SignUp
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='text-center p-3'>
                            <p>
                                <span>
                                    Already have account ? <span>
                                        <NavLink to={'/logIn'}>
                                            LogIn
                                        </NavLink>
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default SignUp