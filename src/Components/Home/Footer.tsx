import React from 'react';
import { NavLink } from 'react-router-dom';

const TOS = "- Term of Service (TOS)";

const Footer = () => {
    return (
        <div className='bg-[#F9A26C] rounded-t-md'>
            <h1 className='textFont text-[30px] pt-[10px] text-center'>Alpinezy</h1>
            <br />
            <NavLink to={"/tos"}>
                <h1 className='font-bold text-center text-[20px]'>{TOS}</h1>
            </NavLink>
            <br />
        </div>
    );
};

export default Footer;