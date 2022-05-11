import React, { useState } from 'react';
import SignIn from './RegisterLogin/SignIn';
import SignUp from './RegisterLogin/SignUp';

const ControllerLogin = ( props ) => {
    let [signIn, setSignIn] = useState(props.SignIn);
    let [signUp, setSignUp] = useState(props.SignUp);

    if (!signIn && !signUp) signIn = true;

    return (
        <div className=''>
            {signIn && <SignIn />}
            {signUp && <SignUp />}
        </div>
    );
};

export default ControllerLogin;