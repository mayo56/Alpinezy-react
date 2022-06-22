import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [channels, setChannels] = useState<channels[] | null>(null);
    const [allUsers, setAllUsers] = useState<USER[] | null>(null);
    const [compteur, setCompteur] = useState(0);

    const navigate = useNavigate();

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
            setChannels(res.data);
            console.warn(res.data)
        })
    };
    const getAllUsers = async () => {
        await axios({
            method:"post",
            url: `${API_URL}/api/user/userslist`,
            headers:{
                "Authorization": localStorage.getItem("Alpinezy") as string
            },
            data:{
                users: guild?.members
            }
        }).then(res => {
            setAllUsers(res.data);
        })
    }
    useEffect(() => {
        getUser();
        getGuild();
    }, [])
    if (user && guild && compteur === 0) {
        if (!user.serveur.split(/,/g).includes(props.params.idGuild)) navigate("/thread");
        if (props.params.idChannel !== "home" && !guild?.channels.split(/,/g).includes(props.params.idChannel)) navigate(`/guild/${props.params.idGuild}/home`);
        getChannels();
        getAllUsers();
        setCompteur(1)
    }
    console.log(guild)
    return (
        <div className='grid grid-cols-[auto_minmax(400px,_0px)]'>
            <CenterController user={user} guild={guild} allUsers={allUsers} channels={channels} thisChannel={props.params.idChannel} />
            <RightController user={user} guild={guild} channels={channels} thisChannel={props.params.idChannel} thisGuild={props.params.idGuild} />
        </div>
    );
};

export default GuildChannelController;