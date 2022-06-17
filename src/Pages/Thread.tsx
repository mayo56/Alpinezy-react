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
        <div className='bg-[#171723] h-auto'>
            <ThreadController />
        </div>
    );
};

export default Thread;