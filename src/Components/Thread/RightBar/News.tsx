import React from 'react';
//className='bg-[#1A4059] rounded-lg w-[400px] h-[300px] ml-auto mr-[20px]'
const News = () => {
    return (
        <div className=''>
            <div className={'rounded-lg w-[400px] h-[300px] grid grid-rows-2 ' + 
        "bg-[rgba(23,_23,_35,_0.35)] border-solid border-[rgba(255,_255,_255,_0.18)] border-[1px]"}>
                <div className='grid grid-rows-2 h-[270px]'>
                    <div className=''>
                        <div className='flex'>
                            <h1 className='ml-[10px] text-[green] font-bold'>Nouveaté</h1>
                            <div className='w-[300px] h-[5px] m-auto rounded-lg bg-[green]'></div>
                        </div>
                        <ul>
                            <li>BLBLB</li>
                        </ul>
                    </div>
                    <div className=''>
                        <div className='flex'>
                            <h1 className='ml-[10px] text-[orange] font-bold'>Changement</h1>
                            <div className='w-[270px] h-[5px] m-auto rounded-lg bg-[orange]'></div>
                        </div>
                    </div>
                    <hr className='w-[70%] m-auto'/>
                </div>
                <div className='grid grid-cols-3 mt-[120px] h-[30px]'>
                    <h1 className='ml-[20px] mr-auto'>Support</h1>
                    <h1 className='ml-auto mr-auto'>Discord</h1>
                    <h1 className='mr-[20px] ml-auto'>Twitter</h1>
                </div>
            </div>
        </div>
    );
};

export default News;