import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { socket } from '../../../..';
import { API_URL } from '../../../../App';
import { Liste, USER } from '../../../Thread/ThreadController';

type MessagesYay = {
    id: number; content: string; author: string;
    isreply: number; timestamp: string;
}
export type MessagesSocket = {
    id: number; content: string; author: string;
    isreply: number; timestamp: string; channelID: string;
}

const Messages = (props: { guild: Liste | null, thisChannel: string, allUsers: USER[] | null }) => {
    const [messages, setMessages] = useState<MessagesYay[] | null>(null);
    const [compteur, setCompteur] = useState(0);
    const [loadMessage] = useState([0,1,2,3,4,5,6,7,8,9,10]);

    const getMessage = async () => {
        await axios({
            method: "get",
            url: `${API_URL}/api/message/allMessages/${props.thisChannel}`,
            headers: {
                "Authorization": localStorage.getItem("Alpinezy") as string
            }
        }).then(res => {
            setMessages(res.data);
        })
    };
    if (props.guild && compteur === 0) {
        getMessage();
        setCompteur(1);
    };
    useEffect(() => {
        return () => {
            socket.on("messageCreate", (message: MessagesSocket) => {
                if (message.channelID !== props.thisChannel) return;
                if (!messages?.find(e => e.id === message.id)) {
                    setMessages((e) => ([...e!, message]));
                }
            });
        }
    }, [])
    useEffect(() => {
        document.getElementById('messages')?.scrollTo(0, Number(document.getElementById("messages")?.clientHeight));
    }, [messages])

    //S'il y a des messages
    if (messages) {
        return (
            <div id="messages" className='overflow-auto h-[100%]'>
                {
                    messages?.map((e, index) => {
                        //membre
                        const member = props.allUsers?.find(a => a.id === Number(e.author));
                        //message avec saut de ligne
                        const content = e.content.split(/\n/);
                        //timestamp
                        const date = new Date(Number(e.timestamp))
                        const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                        return (
                            <div key={index.toString()} className='ml-[10px] h-auto text-white hover:bg-[#2A2A3F] w-auto'>
                                <div className='grid grid-cols-[60px_auto] mt-[2px] min-h-[60px]'>
                                    <img src={`${API_URL}/api/user/avatar/${member?.avatarurl}`} alt="PP"
                                        className='w-[42px] h-[42px] ml-auto mt-[5px] mr-auto rounded-full object-cover object-center' />
                                    <div className='ml-[5px] h-auto'>
                                        <div className='flex justify-start items-baseline'>
                                            <h1 className='text-red-500'>{member?.username}</h1>
                                            <h1 className='ml-[5px] text-[12px] text-gray-500'>{DateReturned}</h1>
                                        </div>
                                        <h1 className='break-all h-auto w-auto'>
                                            {
                                                content.length > 1 ?
                                                    (
                                                        content.map(e => {
                                                            return (
                                                                <>
                                                                    {e}
                                                                    <br />
                                                                </>
                                                            )
                                                        })
                                                    ) : (
                                                        content
                                                    )
                                            }
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    } else {
        return (
            <div className='overflow-auto h-[100%] animate-pulse'>
                {
                    loadMessage.map(e => {
                        return (
                            <div key={e} className='ml-[10px] h-auto text-white hover:bg-[#2A2A3F] w-auto'>
                                <div className='grid grid-cols-[60px_auto] mt-[2px] min-h-[60px]'>
                                    {/* PP */}
                                    <div className='w-[42px] h-[42px] bg-gray-500 ml-auto mt-[5px] mr-auto rounded-full object-cover object-center' />
                                    <div className='ml-[5px] h-auto'>
                                        <div className='flex justify-start items-baseline'>
                                            <h1 className='bg-red-500 h-[15px] rounded-full w-[40px]'></h1>
                                            <h1 className='ml-[5px] h-[12px] rounded-lg w-[100px] bg-gray-500'></h1>
                                        </div>
                                        <h1 className=' mt-[10px] break-all rounded-full bg-sky-500 h-[15px] w-[400px]' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
};

export default Messages;