import React from 'react';
import { channels } from '../../GuildChannelController';

const ListChannel = (props : {chanels:channels[]|null}) => {
    return (
        <div className='flex justify-center items-start'>
            <div className='w-[90%] mt-[20px] h-[90%] rounded-lg bg-[#1A4059]'>

            </div>            
        </div>
    );
};

export default ListChannel;