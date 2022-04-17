import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icons/google.png'

const SocialLogin = () => {

    // signin with google handling section 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    // navigation section 
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <button className='btn btn-outline-light' onClick={() => signInWithGoogle()}><img style={{ width: '40px' }} src={googleIcon} /> Google Sign in</button>
            {errorMessage}
        </div>
    );
};

export default SocialLogin;