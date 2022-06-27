import React from 'react';
import { API_URL } from '../../../App';
import { USER } from '../../../Components/Thread/ThreadController';

const AfficheUser = (props:{user:USER|null}) => {
    return (
        <div>
            <div key={"profile zone"}>
                <h1>{props.user?.username}#{props.user?.discriminator}</h1>
                <img src={props.user ? `${API_URL}/api/user/avatar/${props.user?.avatarurl}` : ""} alt="" className='w-[500px]' />
            </div>
        </div>
    );
};

export default AfficheUser;