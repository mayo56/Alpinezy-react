import React from 'react';
import { useParams } from 'react-router-dom';
import LostInLogin from './RegisterLogin/lostInLogin';
import SignIn from './RegisterLogin/SignIn';
import SignUp from './RegisterLogin/SignUp';


const ControllerLogin = ( ) => {
    let LoginName = useParams()
    return (
        <div>
            {
                LoginName.id === "signin" ? <SignIn /> : LoginName.id === "signup" ? <SignUp /> : <LostInLogin />
            }
        </div>
    );
};

export default ControllerLogin;