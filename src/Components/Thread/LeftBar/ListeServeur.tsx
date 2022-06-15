import axios from 'axios';
import React, { useState } from 'react';
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
            console.log(res.data,"message", ListeMessage)
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
            <div className='bg-[#1A4059] grid grid-cols-1 overflow-y-auto w-auto h-[71.7vh] rounded-lg'>
                {
                    ListeMessage && ListeServeur ?
                        (
                            /* Si les données sont chargées */
                            ListeSelect === 0 ?
                                (
                                    /* Si serveur */
                                    ListeServeur.length > 0 ?
                                    ListeServeur.map(e => {
                                        //Des serveur ?
                                        return (
                                            <div
                                            className={
                                                'w-[90%] h-[90px] ml-auto mr-auto mt-[20px] bg-green-500 rounded-lg ' /* Style */ 
                                                + 'grid grid-cols-[100px_auto]' /* grid */
                                                }>
                                                    <div key={e.id} className='flex justify-center items-center'>
                                                        <img src={`${API_URL}/api/user/avatar/default.jpg`} className={"h-[70px] w-[70px] rounded-full object-center"} alt="test" />
                                                    </div>
                                                    <div>
                                                        <h1>{e.name}</h1>
                                                    </div>

                                            </div>
                                        )
                                    }): (
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
                                    }):
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
            </div>
        </div >
    );
};

export default ListeServeur;