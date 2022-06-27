import React from 'react';
import ThreadController from '../Components/Thread/ThreadController';
import { socket } from "../index"

const Thread = () => {
    setInterval(() => {
        if (!localStorage.getItem("Alpinezy")) {
            window.location.href = "/login/signin";
        };
    }, 5000);
    console.log(socket)
    return (
        <div className='bg-[linear-gradient(#171723,_#ff5000_200%)] h-auto'>
            <ThreadController />
            <div className='bg-[#d08156]'></div>
        </div>
    );
};
//#171723
export default Thread;