import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../../../App';

const ButtomBar = (props:{thisChannel:string}) => {
    const [message, setMessage] = useState("");
    const sendMessage = async () => {
        if (!message) return;
        await axios({
            method:"post",
            url:`${API_URL}/api/message/send`,
            headers:{
                "Authorization":localStorage.getItem("Alpinezy") as string
            },
            data:{
                message:message,
                channelID:props.thisChannel,
            }
        }).then(res => {
            setMessage("");
            console.warn("Message envoyé avec succès !")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='bg-green-500 ml-[10px] h-[40px] mt-[20px] grid grid-cols-[auto_50px]'>
            <textarea
            placeholder='Envoyer un message !'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='p-[5px] bg-gray-500 text-white m-auto w-full min-h-[35px] max-h-[35px] rounded-lg resize-none outline-none' />
            <div className='bg-red-500 m-auto w-[35px] hover:cursor-pointer rounded-lg h-[35px]' onClick={() => sendMessage()}>
                <svg className='w-[80%] h-[80%] m-auto mt-[2px]' viewBox='0 0 495.003 495.003'>
                    <path d="M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616
                    l-67.6-32.22V456.687z" />
                    <path d="M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422
                    c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414
                    l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956
                    L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z" />
                </svg>
            </div>
        </div>
    );
};

export default ButtomBar;