import React from 'react';
import { API_URL } from '../../../App';
import { USER } from '../../../Components/Thread/ThreadController';

const AfficheUser = (props: { user: USER | null }) => {
    return (
        <div className='bg-sky-500 pb-[20px] rounded-lg w-[500px]'>
            <div key={"profile zone"} className={"m-auto"}>
                {/* Banner */}
                <img src={props.user ? `${API_URL}/api/user/avatar/default.jpg` : ""} alt=""
                    className='w-[500px] object-cover object-center h-[100px] rounded-t-lg' />

                {/* grid user infos */}
                <div className='grid grid-cols-[auto_20%] mt-[20px]'>
                    <div>
                        <h1>{props.user?.username}#{props.user?.discriminator}</h1>
                        <h1>{props.user?.bio}</h1>
                    </div>
                    <img src={props.user ? `${API_URL}/api/user/avatar/${props.user?.avatarurl}` : ""} alt=""
                        className='w-[100px] h-[100px] shadow-lg rounded-full object-cover object-center ' />
                </div>
            </div>
        </div>
    );
};

export default AfficheUser;