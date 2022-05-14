import React from 'react';
import { Navigate } from "react-router-dom"

import TopBar from '../Components/ComponentsBar/TopBar';
import ControllerLogin from '../Components/LoginPages/ControllerLogin';

const Login = () => {
    let token = localStorage.getItem("Alpinezy");

    return (
        <div className='bg-[#325D79] h-screen'>
            <TopBar />
            { token ? <Navigate to="/thread"/> : <ControllerLogin /> }
        </div>
    );
};

export default Login;