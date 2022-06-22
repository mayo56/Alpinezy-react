import React from 'react';
import { Liste } from '../../../Thread/ThreadController';

const Home = (props: { guild: Liste | null }) => {
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
        </div>
    );
};

export default Home;