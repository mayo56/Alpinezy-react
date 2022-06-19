import React from 'react';
import { Liste, USER } from '../../../Thread/ThreadController';
import { channels } from '../../GuildChannelController';
import ListChannel from './ListChannel';
import ListeServeur from './ListeServeur';

const RightController = (props : {user:USER|null, guild:Liste|null, channels:channels|null}) => {
    return (
        <div className='h-screen text-white grid grid-rows-[50%_50%] overflow-scroll'>
            <ListChannel />
            <ListeServeur />
        </div>
    );
};

export default RightController;