import React from 'react';
import { Liste, USER } from '../../../Thread/ThreadController';
import { channels } from '../../GuildChannelController';
import ButtomBar from './ButtomBar';
import Home from './Home';
import Messages from './Messages';
import NavBar from './NavBar';

const CenterController = (props: { user: USER | null, guild: Liste | null, channels: channels[] | null, allUsers: USER[] | null, thisChannel: string }) => {
    return (
        <>
            {
                props.thisChannel !== "home" ?
                    (
                        <div className='grid grid-rows-[80px_minmax(800px,_0px)_80px]'>
                            <NavBar guild={props.guild} channels={props.channels} thisChannel={props.thisChannel} />
                            <Messages guild={props.guild} thisChannel={props.thisChannel} allUsers={props.allUsers} />
                            <ButtomBar thisChannel={props.thisChannel} />
                        </div>
                    ) : (
                        <div className='grid grid-rows-[80px_auto]'>
                            <NavBar guild={props.guild} channels={props.channels} thisChannel={props.thisChannel} />
                            <Home guild={props.guild} allUsers={props.allUsers} />
                        </div>
                    )
            }
        </>
    );
};

export default CenterController;