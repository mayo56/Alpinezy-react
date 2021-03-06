import React from 'react';
import { Navigate } from "react-router-dom"

import ControllerLogin from '../Components/LoginPages/ControllerLogin';

const Login = () => {
    let token = localStorage.getItem("Alpinezy");

    return (
        <div className='bg-[#325D79] h-[100vh]'>
            { token ? <Navigate to="/thread"/> : <ControllerLogin /> }
        </div>
    );
};

export default Login;