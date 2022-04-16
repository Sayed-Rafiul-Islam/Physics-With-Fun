import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
    }


    if (error) {
        const errorText = error.message;
    }

    // navigation section 

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home')
    }


    return (
        <div className='container w-25'>

            <h2 className='text-light mb-3'>Please <span className='text-info'>Register</span></h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3 text-light text-start" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-light" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-light mt-3'>Already have an account? <Link className='text-info link' to='/login' onClick={navigateLogin}>Go to Login</Link></p>

            {/* <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your Name' />

                <input type="email" name="email" id="2" placeholder='Email Address' />

                <input type="password" name="password" id="3" placeholder='Password' />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link className='text-danger link' to='/login' onClick={navigateLogin}>Go to Login</Link></p> */}

        </div>
    );
};

export default Register;