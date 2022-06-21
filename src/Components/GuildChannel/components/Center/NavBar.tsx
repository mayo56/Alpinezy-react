import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Liste } from '../../../Thread/ThreadController';
import { channels } from '../../GuildChannelController';

const NavBar = (props:{guild:Liste|null, channels:channels[]|null, thisChannel:string}) => {
    return (
        <div className='grid h-[40px] mt-[20px] ml-[10px] grid-cols-[40px_60px_minmax(200px,_1fr)]'>

            {/* Bouton HOME */}
            <div>
                <NavLink to={"/thread"}>
                    <svg className='w-[40px] bg-[#1A4059] hover:bg-[#325D79] p-[5px] rounded-lg' viewBox='0 0 39.434 39.434'>
                        <path
                        d="M39.434,20.718c0,1.104-0.895,2-2,2c-0.004,0-0.012,0-0.02,0h-3.805v10.637c0,1.104-0.896,2-2,2h-6.568
                        c-1.104,0-2-0.896-2-2v-5.638c0-1.838-1.496-3.333-3.333-3.333c-1.838,0-3.334,1.495-3.334,3.333v5.638c0,1.104-0.896,2-2,2H7.805
                        c-1.104,0-2-0.896-2-2V22.718H2c-0.844,0-1.598-0.528-1.882-1.322c-0.285-0.795-0.043-1.682,0.606-2.22L18.432,4.538
                        c0.74-0.611,1.81-0.611,2.549,0L38.526,19.04C39.072,19.398,39.434,20.016,39.434,20.718z" fill='white' />
                    </svg>
                </NavLink>
            </div>

            {/* Bouton Paramètres */}
            <div className='m-auto'>
                <NavLink to={"/parameter/1"}>
                <svg className='w-[40px] bg-[#1A4059] hover:bg-[#325D79] p-[5px] rounded-lg' viewBox='0 0 380 380'>
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
                </NavLink>
            </div>

            {/* Bar avec nom guild et channel */}
            <div className='bg-[#1A4059] rounded-lg text-white p-[5px] pl-[10px] flex justify-start items-center'>
                <h1 className='font-bold'>{props.guild?.name}:</h1>
                <h6 className='italic ml-[5px]'>{props.thisChannel !== "home" ? props.channels?.[0]?.name : "Home"}</h6>
            </div>
        </div>
    );
};

export default NavBar;