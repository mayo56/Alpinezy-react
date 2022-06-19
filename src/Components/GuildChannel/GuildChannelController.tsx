import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../App';
import { Liste, USER } from '../Thread/ThreadController';
import CenterController from './components/Center/CenterController';
import RightController from './components/Right/RightController';

export type channels = {
    id:number, name:string, type:string
}

const GuildChannelController = (props: { params: { idGuild: string, idChannel: string } }) => {
    const [user, setUser] = useState<USER | null>(null);
    const [guild, setGuild] = useState<Liste | null>(null);
    const [channels, setChannels] = useState<channels | null>(null);
    const [compteur, setCompteur] = useState(0);

    const getUser = async () => {
        await axios({
            method: 'get',
            url: `${API_URL}/api/user/getWithAuth/${localStorage.getItem('AlpinezyID')}`,
            headers: {
                'Authorization': `${localStorage.getItem('Alpinezy')}`
            }
        }).then(res => {
            if (res.data.error) {
                localStorage.clear();
                window.location.href = "/login/signin";
            } else
                setUser(res.data.user[0]);
        })
    };
    const getGuild = async () => {
        await axios({
            method: 'post',
            url: `${API_URL}/api/user/guildlist`,
            headers: {
                'Authorization': `${localStorage.getItem('Alpinezy')}`
            },
            data: {
                guilds: props.params.idGuild
            }
        }).then(res => {
            if (res.data.error) {
                localStorage.clear();
                window.location.href = "/login/signin";
            } else
                setGuild(res.data[0]);
        })
    };
    const getChannels = async () => {
        await axios({
            method:"post",
            url: `${API_URL}/api/user/channellist`,
            headers:{
                'Authorization': `${localStorage.getItem('Alpinezy')}`
            },
            data: {
                channels:guild?.channels
            }
        }).then(res => {
            setChannels(res.data[0]);
        })
    }
    useEffect(() => {
        getUser();
        getGuild();
    }, [])
    if (user && compteur === 0) {
        getChannels();
        setCompteur(1)
    }
    return (
        <div className='grid grid-cols-[auto_minmax(400px,_0px)]'>
            <CenterController user={user} guild={guild} channels={channels} />
            <RightController user={user} guild={guild} channels={channels} />
        </div>
    );
};

export default GuildChannelController;