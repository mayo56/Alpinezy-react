import React from 'react';
import CenterController from './components/Center/CenterController';
import RightController from './components/Right/RightController';

const GuildChannelController = (props:{params:{idGuild:string, idChannel:string}}) => {
    return (
        <div className='grid grid-cols-[auto_minmax(400px,_0px)]'>
            <CenterController />
            <RightController />
        </div>
    );
};

export default GuildChannelController;