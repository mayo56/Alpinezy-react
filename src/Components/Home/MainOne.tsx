import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Main.css";


const MainOne = () => {
    //Slogan
    const MOSloganSM = "sm:-translate-y-[290px] sm:text-[20px] ";
    const MOSloganMD = "md:-translate-y-[320px] md:text-[25px] ";
    const MOSloganLG = "lg:-translate-y-[420px] lg:text-[30px] ";
    const MOSloganXL = "xl:-translate-y-[540px] xl:text-[40px] ";
    const MOSlogan2XL = "2xl:-translate-y-[690px] 2xl:text-[50px] ";

    //boutons
    const MOBoutonSM = "sm:-translate-y-[300px] sm:text-[20px] ";
    const MOBoutonMD = "md:-translate-y-[320px] md:text-[25px] ";
    const MOBoutonLG = "lg:-translate-y-[420px] lg:text-[30px] ";
    const MOBoutonXL = "xl:-translate-y-[540px] xl:text-[40px] ";
    const MOBouton2XL = "2xl:-translate-y-[690px] 2xl:text-[50px] ";

    const MO2BoutonSM = "sm:-translate-y-[340px] sm:text-[20px] "; //640px
    const MO2BoutonMD = "md:-translate-y-[360px] md:text-[25px] "; //768px
    const MO2BoutonLG = "lg:-translate-y-[460px] lg:text-[30px] "; //1024px
    const MO2BoutonXL = "xl:-translate-y-[580px] xl:text-[40px] "; //1280px
    const MO2Bouton2XL = "2xl:-translate-y-[730px] 2xl:text-[50px] "; //1536px
    return (
        <div>
            {/* Partie bouton pour se loguer */}
            <div>
                {/* Image */}
                <img src={require("./imgs/climb.jpg")} alt='Climb' className='w-[100%] h-[100%]' />

                {/* Slogan */}
                <div className='slogan'>
                    <h1 className={'textFont -translate-y-[170px] text-[12px] ml-[5%] ' + MOSloganSM + MOSloganMD + MOSloganLG + MOSloganXL + MOSlogan2XL}>Gravir la montagne...</h1>
                    <h1 className={'textFont -translate-y-[170px] text-[12px] ml-[5%] ' + MOSloganSM + MOSloganMD + MOSloganLG + MOSloganXL + MOSlogan2XL}>...Pour atteindre le sommet !</h1>
                </div>

                <br />
                <br />

                {/* Boutons */}
                <div className='ml-[5%]'>
                    <div className='flex'>
                        <NavLink to={"/login"}
                            className={'-translate-y-[200px] text-[12px] p-[5px] bg-[#1E4973] rounded-[18px] ' + MOBoutonSM + MOBoutonMD + MOBoutonLG + MOBoutonXL + MOBouton2XL}>
                            <h1 className='text-[#EFEEEE] textFont'>
                                S'inscrire
                            </h1>
                        </NavLink>
                    </div>
                    <br />
                    <br />
                    <div className='flex'>
                        <NavLink to={"/login"}
                            className={'-translate-y-[240px] text-[12px] bg-[#1E4973] p-[5px] rounded-[18px] ' + MO2BoutonSM + MO2BoutonMD + MO2BoutonLG + MO2BoutonXL + MO2Bouton2XL}>
                            <h1 className='text-[#EFEEEE] textFont'>Se connecter</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainOne;