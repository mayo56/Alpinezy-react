import React from 'react';
import ThreadController from '../Components/Thread/ThreadController';


const Thread = () => {
    setInterval(() => {
        if (!localStorage.getItem("Alpinezy")) {
            window.location.href = "/login/signin";
        };
    }, 10000)
    return (
        <div className='bg-[#171723] h-auto'>
            <ThreadController />
        </div>
    );
};

export default Thread;