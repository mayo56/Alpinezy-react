import React from 'react';
import { NavLink } from 'react-router-dom';

const TOS = "- Term of Service (TOS)";

const Footer = () => {
    return (
        <div className='bg-[#F9A26C] rounded-t-md'>
            <h1 className='textFont text-[50px] ml-[20px] pt-[10px]'>Alpinezy</h1>
            <NavLink to={"/tos"}>
                <h1 className='font-bold text-[20px] ml-auto mr-0'>{TOS}</h1>
            </NavLink>
            <br />
        </div>
    );
};

export default Footer;