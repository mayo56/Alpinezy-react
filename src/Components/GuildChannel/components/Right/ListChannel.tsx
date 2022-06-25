import React from 'react';
import { NavLink } from 'react-router-dom';
import { channels } from '../../GuildChannelController';

const ListChannel = (props: { chanels: channels[] | null, thisGuild: string, thisChannel: string }) => {
    return (
        <div className='flex justify-center items-start'>
            <div className='w-[90%] mt-[20px] h-[90%] rounded-lg bg-[#1A4059] p-[10px]'>
                <NavLink to={`/guild/${props.thisGuild}/home`} >
                    <div className={props.thisChannel === "home" ?
                        'bg-sky-900 hover:bg-red-500' :
                        'bg-sky-500 hover:bg-red-500'}>
                        <h1>Home</h1>
                    </div>
                </NavLink>
                {
                    props.chanels?.map(e => {
                        return (
                            <NavLink to={`/guild/${props.thisGuild}/${e.id}`} >
                                <div key={e.id} className={Number(props.thisChannel) === e.id ?
                                    'bg-sky-900 hover:bg-red-500 flex' :
                                    'bg-sky-500 hover:bg-red-500 flex'}>
                                    <h1>{e.name}</h1>
                                    {
                                        e.notif ?
                                            (
                                                <svg className='w-[24px] h-[24px]' viewBox='0 0 100 100'>
                                                    <circle cx={50} cy={50} r={20} fill={"gray"} />
                                                </svg>
                                            ) : (
                                                <></>
                                            )
                                    }
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ListChannel;