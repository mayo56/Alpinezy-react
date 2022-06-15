import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';
import { USER, Liste } from '../ThreadController';

const ListeServeur = (props: { user: USER | null }) => {
    const [ListeSelect, setListeSelect] = useState(0); //Serveur ou message
    const [ListeServeur, setListeServeur] = useState<Liste[] | [] | null>(null); //Liste Serveur(s)
    const [ListeMessage, setListeMessage] = useState<Liste[] | [] | null>(null); //Liste Message(s)
    const Loading = [1, 2, 3, 4, 5, 6, 7];
    const [compteur, setCompteur] = useState(false);

    const getListeServeur = async () => {
        //charge la liste des serveurs
        await axios({
            method: "post",
            url: `${API_URL}/api/user/guildlist`,
            headers: {
                "Authorization": `${localStorage.getItem('Alpinezy')}`
            },
            data: {
                guilds: props.user!.serveur
            }
        }).then(res => {
            setListeServeur(res.data);
            console.warn("Liste server load.")
            console.log(res.data, "serveurs", ListeServeur);
        }).catch(err => {
            console.log(err);
        })
    };
    const getListeMessage = async () => {
        //charge la liste des messages privés
        await axios({
            method: "post",
            url: `${API_URL}/api/user/messagelist`,
            headers: {
                "Authorization": `${localStorage.getItem('Alpinezy')}`
            },
            data: {
                messages: props.user!.privatemessage
            }
        }).then(res => {
            setListeMessage(res.data);
            console.warn("Liste message load")
            console.log(res.data, "message", ListeMessage)
        }).catch(err => {
            console.log(err);
        })
    };

    //Si les données utilisateur sont chargés, executer ...
    if (props.user && compteur === false) {
        getListeMessage();
        getListeServeur();
        setCompteur(true);
    };
    console.log(ListeMessage, ListeServeur)
    return (
        <div className=''>
            <div className='flex text-white justify-between m-auto w-[200px]'>
                {/* Boutons serveur et message */}
                <h1 className={ListeSelect === 0 ?
                    'bg-[#447ca1] p-[5px] pr-[10px] pl-[10px] rounded-t-lg hover:cursor-pointer' :
                    'bg-[#325D79] p-[5px] pr-[10px] pl-[10px] rounded-t-lg hover:cursor-pointer'
                }
                    onClick={() => setListeSelect(0)}>Serveur</h1>
                <h1 className={ListeSelect === 1 ?
                    'bg-[#447ca1] p-[5px] pr-[10px] pl-[10px] rounded-t-lg hover:cursor-pointer' :
                    'bg-[#325D79] p-[5px] pr-[10px] pl-[10px] rounded-t-lg hover:cursor-pointer'
                }
                    onClick={() => setListeSelect(1)}>Message</h1>
            </div>
            <div className='bg-[#1A4059] overflow-y-auto w-[100%] h-[71.7vh] rounded-lg'>
                {
                    ListeMessage && ListeServeur ?
                        (
                            /* Si les données sont chargées */
                            ListeSelect === 0 ?
                                (
                                    /* Si serveur */
                                    ListeServeur.length > 0 ?
                                        (
                                            <div className='flex justify-center'>
                                                {
                                                    ListeServeur.map(e => {
                                                        //Des serveur ?
                                                        return (
                                                            <NavLink to={`/guild/${e.id}/home`}
                                                                className='w-[90%] h-[90px] mt-[20px]'>
                                                                <div
                                                                    className={
                                                                        'w-[100%] h-[90px] bg-[#325D79] hover:shadow-lg hover:bg-[#3f7396] rounded-lg ' /* Style */
                                                                        + 'grid grid-cols-[100px_auto]' /* grid */
                                                                    }>
                                                                    {/* avatar serveur */}
                                                                    <div key={e.id} className='flex justify-center items-center'>
                                                                        <img src={`${API_URL}/api/user/avatar/default.jpg`} className={"h-[70px] w-[70px] rounded-full object-center"} alt="test" />
                                                                    </div>
                                                                    {/* Autres infos */}
                                                                    <div className='grid grid-rows-[25px_20px_20px] mt-[10px]'>
                                                                        <h1 className='text-white text-[20px] font-bold'>{e.name}</h1>
                                                                        <p className='text-white italic'>{"Une description !"}</p>
                                                                        <div className='grid grid-cols-2'>
                                                                            <div className='flex'>
                                                                                <svg className='w-[15px]' viewBox='0 0 24 24'>
                                                                                    <path d='M11.8372 11.1735C14.26 11.1735 16.2236 9.2099
                                                                            16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999
                                                                            7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063
                                                                            11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z' stroke='white' fill='white' />
                                                                                    <path d='M11.8445 21.6618C8.15273 21.6618 5 21.0873
                                                                            5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364
                                                                            14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564
                                                                            21.6618 11.8445 21.6618Z' stroke='white' fill='white' />
                                                                                </svg>
                                                                                <h1 className='text-white ml-[5px]'>{e.members.split(/,/g).length} Membres</h1>
                                                                            </div>
                                                                            <div className='flex'>
                                                                                <svg className='w-[15px]' viewBox='0 0 100 100'>
                                                                                    <circle cx='50' cy='50' r='50' fill='#3BB560' />
                                                                                </svg>
                                                                                <h1 className='text-white ml-[5px]'>{"0"} En Ligne</h1>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </NavLink>
                                                        )
                                                    }
                                                    )}
                                            </div>
                                        ) : (
                                            //Si pas de serveur
                                            <div>
                                                <h1>Vous n'avez pas de serveur</h1>

                                            </div>
                                        )
                                ) : (
                                    /* Si message */
                                    ListeMessage.length > 0 ?
                                        ListeMessage.map(e => {
                                            //des message privés ?
                                            return (
                                                <div>

                                                </div>
                                            )
                                        }) :
                                        (
                                            //Si pas de message
                                            <div>
                                                <h1 className='text-white'>Aucun message</h1>
                                            </div>
                                        )
                                )

                        ) : (
                            <div className='animate-pulse'>
                                {/* Si les données sont en train de charger */}
                                {
                                    Loading.map(e => {
                                        return (
                                            <div key={e} className='bg-gray-500 w-[90%] h-[100px] rounded-lg mt-[15px] m-auto'></div>
                                        )
                                    })
                                }
                            </div>
                        )
                }
                {
                    ListeServeur && ListeSelect === 0 ?
                        (
                            <div className='bg-green-500 w-[90%] h-[20px] ml-auto mr-auto mt-[20px] mb-[20px]'>
                            </div>
                        ) : (
                            <></>
                        )
                }
            </div>
        </div >
    );
};

export default ListeServeur;