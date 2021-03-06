import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';
import { USER } from "../ThreadController"
import { badges } from "../ThreadController";


const Profile = (props: { user: USER | null, badges: badges[] | null }) => {
    const [badge, setBadge] = useState({ badge: 0, name: '' });
    const [badgesShow, setBadgeShow] = useState<badges[] | null>(null);
    const [user, setUser] = useState<USER | null>(null);

    useEffect(() => {
        setUser(props.user);
        setBadgeShow(props.badges)
    }, [props.user, props.badges]);
    return (
        <div>
            {/* Profile */}
            <div className={'w-[400px] h-[150px] rounded-lg flex justify-between '+
        "bg-[rgba(23,_23,_35,_0.35)] border-solid border-[rgba(255,_255,_255,_0.18)] border-[1px]"}>
                {/* Avatar */}
                <div className={user ?
                    'mt-[10px] ml-[10px] w-[90px] h-[90px]' : 'mt-[10px] ml-[10px] w-[90px] h-[90px] animate-pulse'
                }>
                    <img src={user ? `${API_URL}/api/user/avatar/${user?.avatarurl}` : ""}
                        className={"w-[90px] h-[90px] bg-gray-600 object-cover object-center rounded-full border-2 shadow-xl"} alt='Photo_de_profile' />
                </div>
                {/* Username, badge et barre de progression */}
                <div className='mr-[20px] w-[250px] mt-[20px] h-[80px] grid grid-cols-1 grid-rows-3'>
                    <div className='bg-[#416075] h-[25px] flex justify-between'>
                        {/* username */}
                        <h1 className='ml-[5px] font-bold text-white'>{user ? user.username : ""}</h1>
                        {/* Bouton modification username */}
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
                        <div className='flex'>
                            <h1 className='text-[10px] text-[#3BC13B]'>200</h1>
                            <h1 className='text-[10px] text-white ml-[3px]'>/ 400exp</h1>
                        </div>

                        <div className='bg-[#FFFFFF] w-[200px] h-[5px] rounded-lg'>
                            <div className='bg-[#00FF00] h-[5px] w-[125px] rounded-lg'>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-[70px]'>
                        {/* Liste de badge */}

                        {/* Bage 1 */}
                        <div>
                            <svg className='w-[20px] h-[20px]' viewBox='0 0 100 100'
                                onMouseOver={() => badgesShow?.[0] ? setBadge({ badge: 1, name: badgesShow ? badgesShow[0].nom : "" }) : ""}
                                onMouseOut={() => setBadge({ badge: 0, name: '' })}>
                                {/* #5865F2 */}
                                <path d={badgesShow ? badgesShow[0]?.svg : ""}
                                    fill={badgesShow ? badgesShow[0]?.fill : ""} stroke={badgesShow ? badgesShow[0]?.stroke : ""} />
                            </svg>
                            {
                                badge.badge === 1 ?
                                    (
                                        <div
                                            className={"absolute p-[3px] w-auto bg-[#101f2a] top-[100px] z-20 border-[2px] border-[#101f2a] rounded-r-md rounded-b-md"}>
                                            <h1 className='text-white'>{badge.name}</h1>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                            }
                        </div>

                        {/* Badge 2 */}
                        <div>
                            <svg className='w-[20px] h-[20px]' viewBox='0 0 100 100'
                                onMouseMove={() => badgesShow?.[1] ? setBadge({ badge: 2, name: badgesShow[1]?.nom }) : ""}
                                onMouseOut={() => setBadge({ badge: 0, name: '' })}>
                                <path d={badgesShow?.[1]?.svg}
                                    stroke={badgesShow ? badgesShow[1]?.stroke : ""} fill={badgesShow ? badgesShow[1]?.fill : ""} strokeWidth={10} />
                            </svg>
                            {
                                badge.badge === 2 ?
                                    (
                                        <div
                                            className={"absolute p-[3px] w-auto bg-[#101f2a] top-[100px] z-20 border-[2px] border-[#101f2a] rounded-r-md rounded-b-md"}>
                                            <h1 className='text-white'>{badge.name}</h1>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                            }
                        </div>

                        {/* Badge 3 */}
                        <div>
                            <svg className='w-[20px] h-[20px]' viewBox='0 0 100 100'
                                onMouseMove={() => badgesShow?.[2] ? setBadge({ badge: 3, name: badgesShow[2]?.nom }) : ""}
                                onMouseOut={() => setBadge({ badge: 0, name: '' })}>
                                <path d={badgesShow ? badgesShow[2]?.svg : ""}
                                    stroke={badgesShow ? badgesShow[2]?.stroke : ""}
                                    fill={badgesShow ? badgesShow[2]?.fill : ""} strokeWidth={10} />
                            </svg>
                            {
                                badge.badge === 3 ?
                                    (
                                        <div
                                            className={"absolute p-[3px] w-auto bg-[#101f2a] top-[100px] z-20 border-[2px] border-[#101f2a] rounded-r-md rounded-b-md"}>
                                            <h1 className='text-white'>{badge.name}</h1>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu de boutons */}
            <div className='flex justify-evenly w-[400px] text-white -translate-y-[40px]'>
                {/* Param??tres */}
                <NavLink to={"/parametres/home"} >
                    <div className='hover:bg-[#101f2a] rounded-lg p-[5px]'>
                        <svg className='w-[20px] h-[20px]' viewBox='0 0 380 380'>
                            <path d='M344.123,217.463l-14.211-8.205c0.858-6.297,1.313-12.724,1.313-19.258c0-6.534-0.455-12.961-1.313-19.258l14.211-8.205
                        c20.467-11.817,27.481-37.99,15.663-58.458l-10.482-18.157c-11.817-20.469-37.989-27.482-58.458-15.664l-14.219,8.21
                        c-10.108-7.862-21.315-14.377-33.348-19.284V42.796C243.278,19.159,224.117,0,200.482,0h-20.964
                        c-23.635,0-42.796,19.159-42.796,42.796v16.387c-12.034,4.907-23.24,11.422-33.348,19.284l-14.219-8.21
                        C68.687,58.44,42.514,65.453,30.697,85.922l-10.482,18.157c-11.818,20.469-4.805,46.641,15.663,58.458l14.212,8.206
                        c-0.858,6.297-1.313,12.724-1.313,19.258c0,6.534,0.455,12.961,1.313,19.258l-14.212,8.206
                        c-20.467,11.817-27.481,37.99-15.663,58.458l10.482,18.157c11.817,20.469,37.99,27.481,58.458,15.664l14.219-8.209
                        c10.108,7.862,21.314,14.377,33.348,19.284v16.387c0,23.637,19.161,42.796,42.796,42.796h20.964
                        c23.635,0,42.796-19.159,42.796-42.796v-16.387c12.034-4.907,23.24-11.422,33.348-19.284l14.219,8.209
                        c20.469,11.818,46.641,4.805,58.458-15.664l10.482-18.157C371.604,255.453,364.59,229.281,344.123,217.463z M190,245.634
                        c-30.725,0-55.634-24.909-55.634-55.634c0-30.725,24.909-55.634,55.634-55.634s55.634,24.909,55.634,55.634
                        C245.634,220.725,220.725,245.634,190,245.634z' fill='white' />

                        </svg>
                    </div>
                </NavLink>

                {/* Profile */}
                <NavLink to={"/parametres/profile"} >
                    <div className='hover:bg-[#101f2a] rounded-lg p-[5px] hover:cursor-pointer'>
                        <svg className='w-[20px]' viewBox='0 0 24 24'>
                            <path d='M11.8372 11.1735C14.26 11.1735 16.2236 9.2099
                        16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999
                        7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063
                        11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z' stroke='white' fill='white' />
                            <path d='M11.8445 21.6618C8.15273 21.6618 5 21.0873
                        5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364
                        14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564
                        21.6618 11.8445 21.6618Z' stroke='white' fill='white' />
                        </svg>
                    </div>
                </NavLink>
                {/* Arbre de comp??tence */}
                <div className='hover:bg-[#101f2a] rounded-lg p-[5px] hover:cursor-pointer'>
                    <svg className='w-[20px] h-[20px]' viewBox='0 0 100 100'>
                        <rect x={0} y={35} width={100} height={30} rx={10} fill={'white'} />
                        <rect x={35} y={0} width={30} height={100} rx={10} fill={'white'} />

                    </svg>
                </div>
                {/* Succ??s */}
                <div className='hover:bg-[#101f2a] rounded-lg p-[5px] hover:cursor-pointer'>
                    <svg className='w-[20px] h-[20px]' viewBox='0 0 100 100'>
                        <path d='M0 0 L100 100 M100 0 L0 100' stroke='red' strokeWidth={10} />

                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Profile;