import React from 'react';
import { Liste, USER } from '../../../Thread/ThreadController';
import { channels } from '../../GuildChannelController';
import ButtomBar from './ButtomBar';
import Messages from './Messages';
import NavBar from './NavBar';

const CenterController = (props:{user:USER|null, guild:Liste|null, channels:channels|null}) => {
    return (
        <div className='grid grid-rows-[80px_auto_80px]'>
            <NavBar guild={props.guild} channels={props.channels} />
            <Messages guild={props.guild}/>
            <ButtomBar />
        </div>
    );
};

export default CenterController;