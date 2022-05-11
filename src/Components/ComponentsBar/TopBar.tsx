import React from 'react';
import { NavLink } from 'react-router-dom';
import "./TopBar.css";
//h-[24px]
const TopBar = () => {
    return (
        <div className="flex bg-[#98D7D1] w-[100%]">
            <NavLink to="/" className='AlpinezyTitle'>
                <h1>Alpinezy</h1>
            </NavLink>
        </div>
    );
};

export default TopBar;