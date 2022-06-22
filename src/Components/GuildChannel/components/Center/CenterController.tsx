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
                        <div className='grid grid-rows-[80px_auto_80px]'>
                            <NavBar guild={props.guild} channels={props.channels} thisChannel={props.thisChannel} />
                            <Messages guild={props.guild} thisChannel={props.thisChannel} allUsers={props.allUsers} />
                            <ButtomBar />
                        </div>
                    ) : (
                        <div className='grid grid-rows-[80px_auto]'>
                            <NavBar guild={props.guild} channels={props.channels} thisChannel={props.thisChannel} />
                            <Home guild={props.guild} />
                        </div>
                    )
            }
        </>
    );
};

export default CenterController;