import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Main.css";


const MainOne = () => {
    const SloganMD = " ";
    return (
        <div className=''>
            {/* Partie bouton pour se loguer */}
            <div id='mainImage'>
                {/* Image */}
                <img src={require("./imgs/climb.jpg")} alt='Climb' className='w-[100%] z-0 h-[100%]' />

                {/* Slogan */}
                <div className='slogan'>
                    <h1 className={'textFont -translate-y-[170px] text-[12px] ml-[5%]'+ SloganMD}>Gravir la montagne...</h1>
                    <h1 className={'textFont -translate-y-[170px] text-[12px] ml-[5%]'}>...Pour atteindre le sommet !</h1>
                </div>

                <br />
                <br />

                {/* Boutons */}
                <div className='ml-[5%]'>
                    <div className='flex'>
                        <NavLink to={"/login"} /*signUp={true} signIn={false}*/
                            className='-translate-y-[200px] text-[12px] p-[5px] bg-[#1E4973] rounded-[18px]'>
                            <h1 className='text-[#EFEEEE] textFont'>
                                S'inscrire
                            </h1>
                        </NavLink>
                    </div>
                    <br />
                    <br />
                    <div className='flex'>
                        <NavLink to={"/login"} /*signIn={true} signUp={false}*/
                            className='-translate-y-[240px] text-[12px] bg-[#1E4973] p-[5px] rounded-[18px]'>
                            <h1 className='text-[#EFEEEE] textFont'>Se connecter</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainOne;