import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GuildChannelController from '../Components/GuildChannel/GuildChannelController';
import VerifToken from '../Verif/token';

const Channel = () => {
    const params = useParams() as {idGuild:string, idChannel:string};
    setTimeout(() => {
        VerifToken(localStorage.getItem("Alpinezy"))
    },5000)
    useEffect(() => {
        VerifToken(localStorage.getItem("Alpinezy"))
    },[])
    return (
        <div>
            <GuildChannelController params={params}/>            
        </div>
    );
};

export default Channel;