import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftBar = () => {
    const [menu] = useState([
        "home", "profile"
    ])
    return (
        <div className='overflow-auto ml-[10px] h-[95vh]'>
            <div>
                {
                    menu.map((name, index) => {
                        return (
                            <NavLink to={"/parametres/" + name} >
                                <div key={index} className='hover:bg-gray-500 mt-[2px] rounded-lg'>
                                    <h1 className='text-center font-bold'>{name}</h1>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftBar;