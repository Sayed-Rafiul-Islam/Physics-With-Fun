import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <div className='d-flex justify-content-center my-5'>
            <CustomLink className='mx-3' to='/home'>Home</CustomLink>
            <CustomLink className='mx-3' to='/blogs'>Blogs</CustomLink>
            <CustomLink className='mx-3' to='/about'>About</CustomLink>
            {
                user ?
                    <button onClick={handleLogout} className='mx-3 btn btn-outline-light py-0' to='/login'>Logout</button>
                    :
                    <CustomLink className='mx-3' to='/login'>Login</CustomLink>
            }


        </div>
    );
};

export default Header;