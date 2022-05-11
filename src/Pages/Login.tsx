import React, { useState } from 'react';
import { Navigate } from "react-router-dom"

import TopBar from '../Components/ComponentsBar/TopBar';
import ControllerLogin from '../Components/LoginPages/ControllerLogin';


const Login = (props:any) => {
    const token = "";

    //lance si la demande est de SingnUp ou SignIn
    const LaunchInSignIn = useState(props.SignIn);
    const LaunchInSignUp = useState(props.SignUp);
    return (
        <div className='bg-[#325D79] h-screen'>
            <TopBar />
            {token ? <Navigate to="/thread"/> : <ControllerLogin SignIn={LaunchInSignIn} SignUp={LaunchInSignUp} />}
        </div>
    );
};

export default Login;