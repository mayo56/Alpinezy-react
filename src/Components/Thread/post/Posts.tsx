import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';
//document.getElementById("")!.append("<div>blblb</div>")
interface PostForm {
    id: number;
    user_id: number;
    message: string;
    timestamp: string;
}
interface UserForm {
    id: number;
    username: string;
    discriminator: string;
    avatarurl: string;
    bio: string;
}

const Posts = () => {

    //Partie posts et user
    const [post, setPost] = useState<PostForm[]>([]);
    const [users, setUsers] = useState<UserForm[]>([]);

    const getPost = useCallback(async () => {
        const AllPost: PostForm[] = await axios({
            method: "get",
            url: `${API_URL}/api/thread/requestAllPost`,
            headers: {
                "Authorization": localStorage.getItem("Alpinezy") as string
            }
        }).then(res => {
            return (res.data.post)
        })
        let AllUser: UserForm[] = []
        for (let i = 0; i < AllPost.length; i++) {
            await axios({
                method: "get",
                url: `${API_URL}/api/user/get/${AllPost[i].user_id}`
            }).then(res => {
                AllUser.push(res.data.user[0])
            })
        }
        setPost(AllPost)
        setUsers(AllUser)
    }, [])

    //rendu de la page
    useEffect(() => {
        getPost()
    }, [getPost])

    //Partie menu déroulant
    const [menu, setMenu] = useState(-1);

    //Partie commentaires
    const [comment, setComment] = useState(-1);
    return (
        <div className='mt-[50px]'>
            {
                post.map((onePost, index) => {
                    const date = new Date(Number(onePost.timestamp))
                    /**
                     * "Date: "+date.getDate()+
                        "/"+(date.getMonth()+1)+
                        "/"+date.getFullYear()+
                        " "+date.getHours()+
                        ":"+date.getMinutes()+
                        ":"+date.getSeconds());
                     */
                    const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                    return (
                        <div key={onePost.id}>

                            <div className='flex'>
                                <div className='bg-[#325D79] grid w-[620px] grid-rows-3 mt-[20px] rounded-lg p-[20px] text-white'>

                                    {/* Top profil et date */}
                                    <div className='flex justify-between items-center'>

                                        {/* Profil */}
                                        <NavLink to={`/profile/${onePost.user_id}`}
                                            className='flex h-[50px] w-[201px] hover:bg-[#407496] hover:cursor-pointer rounded-lg'>

                                            <img src={`${API_URL}/api/user/avatar/${users[index].avatarurl}`}
                                                alt="Photo_de_profile"
                                                className='p-[5px] w-[50px] h-[50px] object-cover object-center rounded-full' />

                                            <div className={"ml-[10px] h-[50px] flex items-center rounded-lg"}>
                                                <div className=''>
                                                    <h1 className='font-bold'>{users[index].username}</h1>
                                                </div>
                                            </div>

                                        </NavLink>

                                        {/* Date */}
                                        <p className='text-right unsellectionnable'>{DateReturned}</p>

                                    </div>

                                    {/* content */}
                                    <div className='h-auto p-[10px]'>
                                        <p className='max-w-[560px] truncate h-[24px] break-words'>{decodeURI(onePost.message)}</p>
                                    </div>

                                    {/* Bottom */}
                                    <div className='flex justify-between items-center'>
                                        <div className='flex'>
                                            {/* bouton commentaires */}
                                            <div className='flex justify-center items-center w-[30px] h-[30px] bg-[#1A4059] rounded-lg hover:cursor-pointer'
                                            onClick={() => {
                                                if (comment === onePost.id) {
                                                    setComment(-1)
                                                } else {
                                                    setComment(onePost.id)
                                                }
                                            }}>
                                                <p>C</p>
                                            </div>
                                            {/* bouton Like */}
                                            <div className='ml-[10px] flex justify-center items-center w-[30px] h-[30px] bg-[#1A4059] rounded-lg hover:cursor-pointer'>
                                                <p>L</p>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div onClick={
                                                () => {
                                                    // Si le menu est ouvert, alors on le ferme, sinon on l'ouvre.
                                                    menu === onePost.id ? setMenu(-1) : setMenu(onePost.id)
                                                }
                                            }
                                                className={
                                                    "bg-[#1A4059] w-[30px] h-[30px] text-center rounded-md hover:cursor-pointer"
                                                }
                                            >
                                                <p className='unsellectionnable'>...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    menu === onePost.id ?
                                        (
                                            <div className='flex'>
                                                <div className='z-10 absolute w-[10px] ml-[-10px] mt-[150px] h-[20px] bg-sky-500 rotate-45'></div>
                                                <div className='z-10 border-[2px] border-sky-400 ml-[-10px] mt-[70px] bg-black p-[5px] rounded-[5px] absolute text-white'>
                                                    <NavLink to={`/thread/${onePost.id}`}>
                                                        <p className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent"}>Voir le post</p>
                                                    </NavLink>
                                                    <NavLink to={`/thread/${onePost.id}`}>
                                                        <p className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent"}>Signaler</p>
                                                    </NavLink>
                                                    <NavLink to={`/thread/${onePost.id}`}>
                                                        <p className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent"}>Partager</p>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <></>
                                        )
                                }
                            </div>

                            {
                                comment === onePost.id ?
                                    (
                                        /* Partie commentaires */
                                        <div className='flex justify-starts'>
                                            {/* SVG flèche */}
                                            <svg width={"60px"} height={"100px"}>
                                                <path strokeWidth={"5px"}
                                                    stroke='#1A4059'
                                                    fill='transparent'
                                                    d="M20 0 L20 20 C20 20, 20 60, 60 60"
                                                />
                                            </svg>

                                            {/* Box commentaires */}
                                            <div className='p-[10px] w-[80%] rounded-lg h-auto bg-[#325D79] mt-[20px]'>
                                                {/* Titre */}
                                                <h1 className='font-bold text-[18px] text-white underline'>Commentaire</h1>

                                                {/* Zone de texte */}
                                                <textarea
                                                    className={
                                                        'mt-[10px] w-[90%] h-[90px] rounded-lg p-[5px] resize-none outline-none '
                                                    }
                                                    rows={3}
                                                    placeholder={"Écrire un commentaire"}
                                                    maxLength={126}
                                                    autoComplete={"on"}
                                                />

                                                {/* Bouton de submit */}
                                                <p
                                                    className={
                                                        'mr-0 ml-auto w-[120px] text-center rounded-lg mt-[5px] bg-[#1A4059] p-[5px] ' +
                                                        'hover:cursor-not-allowed unsellectionnable'
                                                    }
                                                >Commenter !</p>
                                            </div>
                                        </div>

                                    ):<></>
                            }

                        </div >
                    )
                }, [])
            }
            <br />
        </div >
    );
};

export default Posts;