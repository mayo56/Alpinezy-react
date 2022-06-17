import React from 'react';
import ButtomBar from './ButtomBar';
import NavBar from './NavBar';

const CenterController = () => {
    return (
        <div className='grid grid-rows-[80px_auto_80px]'>
            <NavBar />
            <div />
            <ButtomBar />
        </div>
    );
};

export default CenterController;