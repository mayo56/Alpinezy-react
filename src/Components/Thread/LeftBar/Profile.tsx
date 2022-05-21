import React from 'react';

const Profile = () => {
    const UserName = localStorage.getItem("AlpinezyUsername");
    return (
        <div>
            <div className='bg-[#1A4059] w-[400px] h-[150px] ml-[20px] mt-[20px] rounded-lg flex justify-between'>
                <div className='mt-[10px] ml-[10px] w-[90px] h-[90px]'>
                    <img src={require("./imgTemp/xiao.jpg")} className={"w-[90px] h-[90px] rounded-full"} alt='Photo de profile' />
                </div>
                <div className='mr-[20px] w-[250px] mt-[20px] h-[80px] grid grid-cols-1 grid-rows-3'>
                    <div className='bg-[#416075] h-[25px] flex justify-between'>
                        <h1>{UserName}</h1>
                        <div>
                            
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