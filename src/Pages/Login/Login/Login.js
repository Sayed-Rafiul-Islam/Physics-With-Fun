import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    // navigation section 
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container w-25'>

            <h2 className='text-light mb-3'>Please <span className='text-info'>Login</span></h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3 border-light" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="outline-light" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-light mt-3'>Don't have an account? <Link className='text-info link' to='/register' onClick={navigateRegister}>Go to Register</Link></p>

        </div>
    );
};

export default Login;