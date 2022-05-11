import React from 'react';

import TopBar from '../Components/ComponentsBar/TopBar';
import MainTwo from '../Components/Home/MainTwo';
import MainOne from '../Components/Home/MainOne';

//3173EE
const Home = () => {
    return (
        <div className='bg-[#325D79]'>
            <TopBar />

            <MainOne />
            <br />
            <br />
            <MainTwo />
        </div>
    );
};

export default Home;