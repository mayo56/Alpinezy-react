import React from 'react';

const ButtomBar = () => {
    return (
        <div className='bg-green-500 ml-[10px] h-[40px] mt-[20px] grid grid-cols-[auto_50px]'>
            <textarea
            placeholder='Envoyer un message !'
            className='p-[5px] bg-gray-500 text-white m-auto w-full min-h-[35px] max-h-[35px] rounded-lg resize-none outline-none' />
            
        </div>
    );
};

export default ButtomBar;