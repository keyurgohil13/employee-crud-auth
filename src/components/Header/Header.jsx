import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { signOutInitiate } from '../../services/actions/auth.action';

function Header() {

    const { user } = useSelector(state => state.authReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = () => {
        navigate('/signUp');
    }

    const handleSignOut =() => {
        dispatch(signOutInitiate());
    }
    return (
        <>
            <header className='bg-primary py-1'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='logo col-2'>
                            <h3 className='m-0 text-white'>
                                EmpCRUD
                            </h3>
                        </div>
                        <div className='col'>
                            <nav>
                                <ul className='d-flex list-unstyled m-0'>
                                    <li className='p-3'>
                                        <NavLink to='/' className='fw-bold text-decoration-none text-white'>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className='p-3'>
                                        <NavLink to='/about' className='fw-bold text-decoration-none text-white'>
                                            About
                                        </NavLink>
                                    </li>
                                    <li className='p-3'>
                                        <NavLink to='/contact' className='fw-bold text-decoration-none text-white'>
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='cta col-2'>
                            {
                                user !== null ? <Button variant='success' className='fw-bold text-uppercase' onClick={() => handleSignOut()}>
                                    SignOut
                                </Button> :
                                    <Button variant='success' className='fw-bold text-uppercase' onClick={() => handleSignUp()}>
                                        SignUp
                                    </Button>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header