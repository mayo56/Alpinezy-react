import React from 'react';
import { API_URL } from '../../../App';

const Profile = (props: { user: { id: number, username: string, discriminator: string, avatarurl: string, bio: string } }) => {
    return (
        <div>
            <div className='bg-[#1A4059] w-[400px] h-[150px] ml-[20px] mt-[20px] rounded-lg flex justify-between'>
                <div className='mt-[10px] ml-[10px] w-[90px] h-[90px]'>
                    <img src={`${API_URL}/api/user/avatar/${props.user.avatarurl}`} className={"w-[90px] h-[90px] rounded-full"} alt='Photo_de_profile' />
                </div>
                <div className='mr-[20px] w-[250px] mt-[20px] h-[80px] grid grid-cols-1 grid-rows-3'>
                    <div className='bg-[#416075] h-[25px] flex justify-between'>
                        <h1 className='ml-[5px] font-bold'>{props.user.username}</h1>
                        <div className='shadow-lg'>
                            <svg className='h-[20px] w-[20px] mt-[2.5px] mr-[2.5px]' viewBox='0 0 100 100'>
                                {/* Fond */}
                                <rect y={0} x={0} width={100} height={100} fill={"#1A4059"} rx={20} ry={20} />

                                {/* Crayon */}
                                <path d='M80 20 L40 60'
                                stroke='white' strokeWidth={20} />
                                <circle cx={30} cy={70} r={10} fill='white' />
                                <path d='M30 70 C20 70, 20 80, 10 80 C10 80, 20 90, 35 78'
                                stroke='white' fill='white' strokeWidth={2} />
                            </svg>
                        </div>

                    </div>
                    <div>
                        {/* Level bar */}
                        <h1 className='text-[10px]'>200/400exp</h1>
                        <div className='bg-[#FFFFFF] w-[250px] h-[5px] rounded-lg'>
                            <div className='bg-[#00FF00] h-[5px] w-[125px] rounded-lg'>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-[50px]'>
                        {/* Liste de badge */}
                        <h1>O</h1>
                        <h1>O</h1>
                        <h1>O</h1>
                    </div>
                </div>
            </div>
            {/* Menu de boutons */}
            <div className='flex justify-evenly w-[400px] -translate-y-[30px]'>
                <h1>A</h1>
                <h1>B</h1>
                <h1>C</h1>
                <h1>D</h1>
            </div>
        </div>
    );
};

export default Profile;