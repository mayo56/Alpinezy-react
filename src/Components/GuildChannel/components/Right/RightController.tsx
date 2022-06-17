import React from 'react';
import ListChannel from './ListChannel';
import ListeServeur from './ListeServeur';

const RightController = () => {
    return (
        <div className='h-screen text-white grid grid-rows-[50%_50%] overflow-scroll'>
            <ListChannel />
            <ListeServeur />
        </div>
    );
};

export default RightController;