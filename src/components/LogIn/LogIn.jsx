import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logInInitiate, signInWithGoogle, signUpInitiate } from '../../services/actions/auth.action';
// import { signup } from '../../services/actions/auth2.action';
import './LogIn.css';

function LogIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user} = useSelector(state => state.authReducer);
    const { error} = useSelector(state => state.authReducer);
    const [initial, setInitial] = useState({
        email: '',
        password: '',
    });
    const [isErr, setErr] = useState(error);
    console.log(error,"isErr");
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if(initial.email === '' || initial.password === ''){
            setErr('Enter email and password');
        }else{
            dispatch(logInInitiate(initial.email, initial.password));
            setInitial({
                email: '',
                password: ''
            })
        }

       
    }
    
    const googleSignIn = () =>{
        dispatch(signInWithGoogle());
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
                                LogIn
                            </h3>

                        </div>
                        <div className='mb-2'>
                            {
                                error !== null ? 
                                    error === 'auth/user-not-found' ? 
                                        <p className='text-danger'>
                                            Create your account first
                                        </p>
                                        :
                                            error === 'auth/wrong-password' ? 
                                                    <p className='text-danger'>
                                                        Wrong Password
                                                    </p>
                                                :
                                                    <p className='text-danger'>
                                                        Something went wrong
                                                    </p>
                                    : null
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

                                <Form.Group className='text-center'>
                                    <Button variant="primary" type="submit">
                                        LogIn
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className='text-center p-3'>
                            <p>
                                <span>
                                    Create your account ? <span>
                                        <NavLink to={'/signUp'}>
                                            SignUp
                                        </NavLink>
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div className='text-center'>
                            <Button variant='outline-success' onClick={()=> {googleSignIn()}}>
                                <Google className='text-danger'/> LogIn With Google
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default LogIn