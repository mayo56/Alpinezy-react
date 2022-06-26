import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftBar = () => {
    const [menu] = useState([
        "home", "profile"
    ])
    return (
        <div className='overflow-auto ml-[10px]'>
            <div>
                {
                    menu.map(name => {
                        console.log(name)
                        return (
                            <NavLink to={"/parametres/" + name} >
                                <div className='bg-sky-500 hover:bg-red-300 mt-[2px] rounded-lg'>
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