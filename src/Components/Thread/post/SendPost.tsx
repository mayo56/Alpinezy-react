import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';
import { USER, badges } from '../ThreadController';

const SendPost = (props: { user: USER | null, badges: badges[] | null}) => {
    //input pour post
    const [input, setInput] = useState("")
    const Compteur = (<h1 className={input.length > 1024 ? "text-[red] flex" : "flex"}>{input.length}<h1 className='text-black'>/1024</h1></h1>)

    //user
    const [user, setUser] = useState<USER | null>(props.user)
    const [badges, setBadges] = useState<badges[] | null>(props.badges)

    const SendPost = (e: any) => {
        e.preventDefault()
        axios({
            method: "post",
            url: `${API_URL}/api/thread/post`,
            headers: {
                "Authorization": `${localStorage.getItem("Alpinezy")}`
            },
            data: {
                message: input
            }
        })
            .then(res => {
                document.getElementById("successPostSend")!.innerHTML = res.data.success;
                setInput("")
                setTimeout(() => {
                    document.getElementById("successPostSend")!.innerHTML = "";
                }, 5000);
            })
            .catch(err => {
                document.getElementById("errorPostSend")!.innerHTML = "Une erreur c'est produite.";
                console.log("error detected post\n" + err)
                setTimeout(() => {
                    document.getElementById("errorPostSend")!.innerHTML = "";
                }, 5000);
            });
    };
    useEffect(() => {
        setUser(props.user)
        setBadges(props.badges);
    },[props.user, props.badges]);
    return (
        <div>
            <div className='m-auto mt-[20px] grid grid-rows-3 rounded-lg bg-[#325D79] w-[600px] h-[350px]'>
                {/* Profile */}
                <div>
                    <NavLink to={`/profile/${localStorage.getItem("AlpinezyID")}`}
                        className='grid grid-cols-2 w-[210px] ml-[20px] mt-[20px] h-[60px] row-span-1 rounded-lg p-[5px] hover:bg-[#407496] hover:shadow-lg hover:cursor-pointer'>

                        <img src={user ? `${API_URL}/api/user/avatar/${user?.avatarurl}` : ""} alt="pp" className='w-[50px] h-[50px] ml-[20px] rounded-full' />
                        <div className='text-white'>
                            <h1 className='font-bold text-[18px]'>{user?.username}</h1>
                            <div className='flex'>
                                <svg className='w-[18px] h-[18px]' viewBox='0 0 100 100'>
                                    <path d={badges ? badges[0]?.svg : ""}
                                    fill={badges ? badges[0]?.fill : ""}
                                    stroke={badges ? badges[0]?.stroke : ""} strokeWidth={10} />
                                </svg>
                                <svg className='ml-[5px] w-[18px] h-[18px]' viewBox='0 0 100 100'>
                                <path d={badges ? badges[1]?.svg : ""}
                                    fill={badges ? badges[1]?.fill : ""}
                                    stroke={badges ? badges[1]?.stroke : ""} strokeWidth={10} />
                                </svg>
                                <svg className='ml-[5px] w-[18px] h-[18px]' viewBox='0 0 100 100'>
                                <path d={badges ? badges[2]?.svg : ""}
                                    fill={badges ? badges[2]?.fill : ""}
                                    stroke={badges ? badges[2]?.stroke : ""} strokeWidth={10} />
                                </svg>
                            </div>
                        </div>

                    </NavLink>
                </div>

                {/* input de post */}
                <div className='h-[200px] -translate-y-[10px] w-[600px] flex justify-center row-span-2'>
                    <textarea id="inputPost"
                        placeholder='Ecrit nous un petit mot !'
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        className='text-white p-[10px] min-h-[90%] max-h-[90%] w-[90%] h-[90%] rounded-lg bg-[#1A4059] resize-none outline-none'></textarea>
                </div>
                <h1 id="nb_caractere" className={input.length > 1024 ? 'mr-[5%] row-span-2 flex justify-end font-bold text-[red]' : "mr-[5%] flex justify-end font-bold row-span-2"}>
                    {input.length > 512 ? Compteur : ""}</h1>

                {/* Boutons post! et image */}
                <div className='h-[50px] row-span-3 grid grid-cols-3'>
                    <h1 className='ml-[15%] bg-[#1A4059] h-[35px] w-[35px] rounded-lg'>img</h1>
                    <form onSubmit={e => SendPost(e)} className='text-center'>
                        <input
                            type={"submit"}
                            value="Poster !"
                            className='h-[35px] bg-[#1A4059] text-white pl-[20px] pr-[20px] p-[5px] cursor-pointer rounded-lg hover:shadow-[0px_0px_10px_#101010]'
                        />
                    </form>
                    <div className='mr-[15%] ml-auto'>
                        <h1 id="errorPostSend" className='text-[red] text-center'> </h1>
                        <h1 id="successPostSend" className='text-[green] text-center'> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendPost;