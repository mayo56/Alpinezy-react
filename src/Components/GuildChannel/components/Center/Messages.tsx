import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { socket } from '../../../..';
import { API_URL } from '../../../../App';
import { Liste, USER } from '../../../Thread/ThreadController';

type MessagesYay = {
    id: number; content: string; author: string;
    isreply: number; timestamp: string;
}
type MessagesSocket = {
    id: number; content: string; author: string;
    isreply: number; timestamp: string; channelID: string;
}

const Messages = (props: { guild: Liste | null, thisChannel: string, allUsers: USER[] | null }) => {
    const [messages, setMessages] = useState<MessagesYay[] | null>(null);
    const [compteur, setCompteur] = useState(0);

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
    return (
        <div id="messages" className='overflow-scroll h-[100%]'>
            {
                messages?.map((e, index) => {
                    const member = props.allUsers?.find(a => a.id === Number(e.author));
                    const content = e.content.split(/\n/);
                    return (
                        <div key={index.toString()} className='ml-[10px] h-auto text-white w-auto'>
                            <div className='grid grid-cols-[60px_auto] mt-[2px] min-h-[60px]'>
                                <img src={`${API_URL}/api/user/avatar/${member?.avatarurl}`} alt="PP"
                                    className='w-[50px] ml-auto mt-[5px] mr-auto rounded-full' />
                                <div className='ml-[5px] h-auto'>
                                    <div className='flex justify-start'>
                                        <h1 className='text-red-500'>{member?.username}</h1>
                                        <h1 className='ml-[5px]'>{e.timestamp}</h1>
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
};

export default Messages;