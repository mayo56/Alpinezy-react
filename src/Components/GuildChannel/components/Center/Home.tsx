import React from 'react';
import { API_URL } from '../../../../App';
import { Liste, USER } from '../../../Thread/ThreadController';

const Home = (props: { guild: Liste | null, allUsers:USER[] | null }) => {
    return (
        <div className={props.guild ? 'text-white' : 'animate-pulse'}>
            <img
                className='m-auto w-[20%] rounded-2xl bg-slate-600'
                src="https://api.alpinezy.com/api/user/avatar/default.jpg" alt="dsdsq" />
            <h1 className='text-center font-bold text-[20px]'>{props.guild?.name}</h1>
            <div className='flex justify-center'>
                <p>{props.guild?.members.split(/,/g).length} membres.</p>
                <p className='ml-[10px]'>0 en ligne</p>
            </div>

            {/* Users infos */}
            <div className=''>
               {
                props.allUsers?.map(e => {
                    return (
                        <div className='flex m-auto bg-slate-900 hover:bg-white rounded-lg'>
                            <img className='w-[30px] h-[30px] rounded-full object-cover object-center'
                            src={`${API_URL}/api/user/avatar/${e.avatarurl}`} alt="PP" />
                            <h1 className='ml-[10px]'>{e.username}#{e.discriminator}</h1>
                        </div>
                    )
                })
               }
            </div>
        </div>
    );
};

export default Home;