import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../../../App';
import { Liste, USER } from '../../../Thread/ThreadController';

type Messages = {
    id: number; content: string; author: string;
    isreply: boolean; timestamp: string;
}

const Messages = (props: { guild: Liste | null, thisChannel: string, allUsers: USER[] | null }) => {
    const [messages, setMessages] = useState<Messages[] | null>(null);
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
    return (
        <div>
            {
                messages?.map(e => {
                    const member = props.allUsers?.find(a => a.id === e.id);
                    return (
                        <div key={e.id} className='ml-[10px] bg-sky-300 w-auto'>
                            <div className='grid grid-cols-[60px_auto] min-h-[60px]'>
                                <img src={`${API_URL}/api/user/avatar/${member?.avatarurl}`} alt="PP"
                                    className='w-[50px] m-auto rounded-full' />
                                <div>
                                    <h1>{member?.username}</h1>
                                    <h1>{e.content}</h1>
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