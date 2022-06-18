import React, { useState } from 'react';
import { Liste, USER } from '../../../Thread/ThreadController';
import ButtomBar from './ButtomBar';
import Messages from './Messages';
import NavBar from './NavBar';

const CenterController = (props:{user:USER|null, guild:Liste|null}) => {
    const [guild] = useState<Liste|null>(props.guild)
    return (
        <div className='grid grid-rows-[80px_auto_80px]'>
            <NavBar guild={guild} />
            <Messages guild={props.guild}/>
            <ButtomBar />
        </div>
    );
};

export default CenterController;