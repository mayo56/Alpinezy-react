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
            return (res.data.post);
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
        <div className='mt-[50px] m-auto'>
            {
                post.length < 1 ? (
                    <div className='flex justify-center items-center'>
                        <svg className='h-[30px] w-[30px] animate-spin' stroke='black' viewBox="0 0 30 30">
                            <circle cx={'15'} cy={'15'} r={'10'} stroke={'#1A4059'} fill='none' strokeWidth={"4"} />
                            <path d='M5 15 a10 10 10 0 1 10 -10' stroke='#325D79' strokeWidth={5} />
                        </svg>
                        <h1 className='ml-[10px] text-white'>Chargement...</h1>
                    </div>
                ) : (
                    <></>
                )
            }
            {
                post.map((onePost, index) => {
                    const date = new Date(Number(onePost.timestamp))
                    const DateReturned = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes()}`
                    return (
                        <div key={onePost.id}>

                            <div className='flex'>
                                <div className='bg-[#325D79] grid w-[620px] grid-rows-3 mt-[20px] rounded-lg p-[20px] text-white'>

                                    {/* Top profil et date */}
                                    <div className='flex justify-between items-center'>

                                        {/* Profil */}
                                        <NavLink to={`/profile/${onePost.user_id}`}
                                            className='flex h-[50px] w-[201px] hover:bg-[#407496] hover:cursor-pointer rounded-lg hover:shadow-lg'>

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
                                        <p className='max-w-[560px] truncate text-[24px] break-words'>{decodeURI(onePost.message)}</p>
                                    </div>

                                    {/* Bottom */}
                                    <div className='flex justify-between items-center'>
                                        <div className='flex'>

                                            {/* bouton commentaires */}
                                            <div
                                                className={
                                                    comment === (onePost.id) ? (
                                                        //Si séléctionné
                                                        'flex justify-center items-center w-[30px] h-[30px] bg-[#101f2a] rounded-lg hover:cursor-pointer ' +
                                                        'hover:shadow-lg transition delay-[50ms] hover:scale-[1.15] '
                                                    ) : (
                                                        //Si non séléctionné
                                                        'flex justify-center items-center w-[30px] h-[30px] bg-[#1A4059] rounded-lg hover:cursor-pointer ' +
                                                        'hover:shadow-lg transition delay-[50ms] hover:scale-[1.15] '
                                                    )
                                                }
                                                onClick={() => {
                                                    if (comment === onePost.id) {
                                                        setComment(-1)
                                                    } else {
                                                        setComment(onePost.id)
                                                    }
                                                }}>
                                                <svg width={'30px'} height={'30px'} className={""}>
                                                    <ellipse cx={'15'} cy={'14'} rx={'9'} ry={'8'} stroke={"white"} strokeWidth={'2'} fill={"transparent"} />
                                                    <path d={'M6.7 15.5 L5 22 L12 21.1'} strokeWidth={"2"} stroke={'white'}
                                                        fill={comment === onePost.id ? '#101f2a' : '#1A4059'} />

                                                </svg>
                                            </div>
                                            {/* bouton Like */}
                                            <div className={
                                                'ml-[10px] flex justify-center items-center w-[30px] h-[30px] bg-[#1A4059] rounded-lg hover:cursor-pointer' +
                                                'hover:shadow-lg transition delay-[50ms] hover:scale-[1.15] hover:cursor-pointer'
                                            }>
                                                <svg className='w-[30px] h-[30px]' viewBox='0 0 30 30'>
                                                    <path d={'M5 10 ' +
                                                        'a10 25 0 0 1 10 0 a10 25 0 0 1 10 0 M25 12 ' +
                                                        'C25 6, 28 20, 15 25 M15 25 C15 25, 2 20, 5 10'}
                                                        stroke='white'
                                                        fill='none'
                                                        strokeWidth={2} />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Bouton trois petits points */}
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
                                                <svg className='w-[30px] h-[30px]' viewBox='0 0 120 100'>
                                                    {/* Trois petits points */}
                                                    <circle cx={30} cy={50} r={10} fill={'white'} /> {/* 1er point */}
                                                    <circle cx={60} cy={50} r={10} fill={'white'} /> {/* 2ème point */}
                                                    <circle cx={90} cy={50} r={10} fill={'white'} /> {/* 3ème point */}

                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    //Menu déroulant
                                    menu === onePost.id ?
                                        (
                                            <div className='flex'>
                                                <div className='z-10 absolute w-[10px] ml-[-10px] mt-[165px] h-[20px] bg-sky-500 rotate-45'></div>
                                                <div className='z-10 ml-[-10px] mt-[70px] bg-[#1A4059] border-[#325D79] border-[2px] p-[5px] rounded-[5px] absolute text-white'>

                                                    {/* Voir le post */}
                                                    <NavLink to={`/thread/${onePost.id}`} >
                                                        <div className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent flex items-center"}>
                                                            <svg className='h-[30px] w-[30px]' viewBox='0 0 30 30'>
                                                                {/* Contour */}
                                                                <ellipse cx={15} cy={15} rx={10} ry={6} fill={'none'} strokeWidth={2} stroke={'rgb(14 165 233/500)'} />
                                                                {/* Gros cercle */}
                                                                <circle cx={15} cy={15} r={5} fill={'rgb(14 165 233/500)'} />
                                                                {/* Petit cercle */}
                                                                <circle cx={15} cy={15} r={2} />
                                                            </svg>
                                                            <p className='ml-[5px]'>Voir le post</p>
                                                        </div>
                                                    </NavLink>

                                                    {/* Signaler le post */}
                                                    <NavLink to={`/thread/${onePost.id}`}>
                                                        <div className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent flex items-center"}>
                                                            <svg className='h-[30px] w-[30px]' viewBox='0 0 30 30'>
                                                                <path d={
                                                                    'M5 27 L5 11 C5 11, 5 7, 10 7 ' + //Gauche
                                                                    'L20 7 C20 7, 25 7, 25 11 ' +  //Haut
                                                                    'L25 18 C25 18, 25 22, 20 22' +  //Droite
                                                                    'L10 22 L5 26.5 ' + //bas
                                                                    'M15 9.5 L15 15.5' //Point d'exlamation (barre)
                                                                } stroke={'#FF0000'} strokeWidth={2} fill={'none'} />
                                                                <circle cx={15} cy={18} r={1.2} fill={'red'} />
                                                            </svg>
                                                            <p className='ml-[5px]'>Signaler</p>
                                                        </div>
                                                    </NavLink>

                                                    {/* Partager le post */}
                                                    <NavLink to={`/thread/${onePost.id}`}>
                                                        <div className={"hover:bg-gray-800 p-[5px] rounded-[5px] bg-transparent flex items-center"}>
                                                            <svg className='h-[30px] w-[30px]' viewBox='0 0 30 30'>
                                                                {/* Trais */}
                                                                <path d={
                                                                    "M10 13 L20 7 " +
                                                                    "M10 16 L25 20 " +
                                                                    "M9 18 L15 25"
                                                                } stroke={"#AAAAFF"} strokeWidth={2} fill={'none'} />

                                                                {/* Cercles */}
                                                                <circle cx={7} cy={15} r={4} fill='#777777' strokeWidth={2} stroke='#AAAAAA' /> {/* 1er cercle */}
                                                                <circle cx={20} cy={7} r={3} fill='#AAAAAA' /> {/* 2eme cercle */}
                                                                <circle cx={15} cy={25} r={3} fill='#AAAAAA' /> {/* 4eme cercle */}
                                                                <circle cx={25} cy={20} r={3} fill='#AAAAAA' strokeWidth={1.5} stroke='#AAAAAA' /> {/* 3eme cercle */}
                                                            </svg>
                                                            <p className='ml-[5px]'>Partager</p>
                                                        </div>
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
                                                <h1 className='font-bold text-[20px] text-white'>Commentaire</h1>

                                                {/* Zone de texte */}
                                                <textarea
                                                    className={
                                                        'mt-[10px] w-[90%] h-[90px] rounded-lg p-[5px] resize-none outline-none bg-[#1A4059] text-white'
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
                                                        'hover:cursor-not-allowed unsellectionnable text-white'
                                                    }
                                                >Commenter !</p>
                                            </div>
                                        </div>

                                    ) : <></>
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