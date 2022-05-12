import React from 'react';
import "./Main.css";

import Footer from './Footer';
//imgSizeIMGGRP mt-[20px]

//640px sm
//768px md
//1024px lg
//1280px xl
//1536px 2xl

const MainTwo = () => {
    //Alpinezy qu'est-ce ?
    const MTTexteSM = "sm:text-[25px] ";
    const MTTexteMD = "md:text-[30px] ";
    const MTTexteLG = "lg:text-[40px] ";
    const MTTexteXL = "xl:text-[50px] ";
    const MTTexte2XL = "2xl:text-[50px]";

    //text

    //images
    const MTimages = "w-[90%] m-auto rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[10px]"
    return (
        <div className='mt-[-235px] sm:mt-[-280px] md:mt-[-310px] lg:mt-[-340px] xl:mt-[-400px] 2xl:mt-[-460px]'>
            {/* Slogan de l'app */}
            <br />
            <h1 className={'text-[#EFEEEE] text-center text-bold textFont ' + MTTexteSM + MTTexteMD + MTTexteLG + MTTexteXL + MTTexte2XL}>Alpinezy ? C'est quoi ?</h1>
            <br />
            {/* 1er groupe de la partie image */}
            <div className='lg:grid lg:grid-cols-2 xl:w-[90%] xl:m-auto'>
                {/* Div à remplacer par une image */}
                <img src={require("./imgs/climb3.jpg")} alt="Climb" className={MTimages} />
                <p className='text-center m-auto text-[16px] w-[90%] text-[#EFEEEE] md:text-[20px] 2xl:text-[25px]'>
                    Alpinezy est un réseau social en ligne reprenant les codes
                    habituels des réseaux sociaux mais y ajoute son côté à lui.
                    Alpinezy est un réseau social sur l'échange de post, mais aussi
                    un système de message instantané afin de converser avec vos amis.
                </p>
            </div>

            <br />
            <br />

            {/* 2eme groupe de la partie image */}
            <div className='lg:grid lg:grid-cols-2 xl:w-[90%] xl:m-auto'>
                {/* Div à remplacer par une image */}
                <img src={require("./imgs/climb2.jpg")} alt="Climb" className={MTimages + " lg:order-last"} />
                <p className='text-center m-auto text-[16px] w-[90%] text-[#EFEEEE] md:text-[20px] 2xl:text-[25px]'>
                    Qu'est-ce qu'à Alpinezy qui se démarque des autres ?<br />
                    Alpinezy a en lui un système pas comme les autres. Il est en lui même
                    un jeu, un jeu permettant d'obtenir des récompenses diverses sur
                    l'application.<br />[A développer car là j'ai plus d'inspi]
                </p>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default MainTwo;