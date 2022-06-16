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
                                                <svg className='w-[90%] ml-auto mr-auto mt-[20px]' viewBox='0 0 32 32'>
                                                    <path d="M3,9.36h7c0.75,0,1.36-0.61,1.36-1.36S10.75,6.64,10,6.64H9.312c-0.158-0.576-0.686-1-1.312-1
                                                    c-0.335,0-0.643,0.122-0.88,0.324C6.736,5.181,5.93,4.64,5,4.64c-1.194,0-2.183,0.891-2.339,2.042C2.075,6.833,1.64,7.367,1.64,8
                                                    C1.64,8.75,2.25,9.36,3,9.36z M3,7.36c0.199,0,0.36-0.161,0.36-0.36c0-0.904,0.736-1.64,1.64-1.64S6.64,6.096,6.64,7
                                                    c0,0.199,0.161,0.36,0.36,0.36S7.36,7.199,7.36,7c0-0.353,0.287-0.64,0.64-0.64S8.64,6.647,8.64,7c0,0.199,0.161,0.36,0.36,0.36h1
                                                    c0.353,0,0.64,0.287,0.64,0.64S10.353,8.64,10,8.64H3C2.647,8.64,2.36,8.353,2.36,8S2.647,7.36,3,7.36z M31.36,27v-2
                                                    c0-0.199-0.161-0.36-0.36-0.36h-6.64V23c0-0.199-0.161-0.36-0.36-0.36h-1.64V21c0-0.199-0.161-0.36-0.36-0.36h-4v0.721h3.64v1.279
                                                    H17v0.721h6.64v1.279H16v0.721h3.64v1.279H15v0.721h2.64v1.279H8.36v-1.28h1.28V28h0.72v-1.852l1.636-1.64l1.644,1.641V28h0.72v-2
                                                    c0-0.096-0.038-0.188-0.105-0.255l-2.004-2c-0.067-0.067-0.159-0.105-0.254-0.105l0,0c-0.095,0-0.187,0.038-0.254,0.106l-1.996,2
                                                    C9.678,25.813,9.64,25.904,9.64,26v0.64H8.36V25c0-0.096-0.038-0.188-0.105-0.255l-2-2c-0.141-0.141-0.368-0.141-0.509,0l-2,2
                                                    C3.678,24.812,3.64,24.904,3.64,25v1.64H3v0.721h4.64v1.279H2v0.721h6.64v1.279H1v0.721h30V30.64h-6.64v-1.28H30v-0.72h-7.64v-1.28
                                                    H29v-0.72h-2.64v-1.28h4.279V27H31.36z M7.64,26.64H6.36V26H5.64v0.64H4.36v-1.49L6,23.509l1.64,1.641V26.64z M18.36,27.36h3.279
                                                    v1.279H18.36V27.36z M15.64,30.64H9.36v-1.28h6.28C15.64,29.36,15.64,30.64,15.64,30.64z M23.64,29.36v1.279h-7.28V29.36H23.64z 
                                                    M25.64,26.64h-5.28v-1.28h5.279L25.64,26.64L25.64,26.64z M11.64,27h0.72v1h-0.72V27z M1.322,22.161l-0.644-0.322l3.276-6.552
                                                    c0.199-0.398,0.6-0.646,1.046-0.646s0.847,0.248,1.046,0.646l1.115,2.23l3.577-1.788l5.156-9.451
                                                    c0.218-0.401,0.613-0.644,1.095-0.637c0.457,0.008,0.868,0.267,1.072,0.676l2.188,4.375l3.839,0.96
                                                    c0.063,0.016,0.121,0.048,0.168,0.095l1.895,1.895H28c0.071,0,0.141,0.021,0.199,0.061l3,2l-0.398,0.599l-2.91-1.939H26
                                                    c-0.096,0-0.188-0.038-0.255-0.105l-1.929-1.929l-3.144-0.786l1.65,3.3l-0.645,0.322l-4.262-8.523
                                                    c-0.085-0.171-0.25-0.275-0.44-0.278c-0.183,0.018-0.359,0.095-0.45,0.262l-5.209,9.55c-0.035,0.064-0.089,0.117-0.155,0.149
                                                    l-3.678,1.84l0.657,1.313l1.829-1.22c0.302-0.201,0.665-0.272,1.021-0.202c0.356,0.071,0.663,0.277,0.865,0.58l1.445,2.168
                                                    l-0.599,0.398l-1.445-2.168c-0.095-0.142-0.239-0.239-0.407-0.272c-0.169-0.034-0.339,0.001-0.481,0.096L8.2,20.3
                                                    c-0.085,0.056-0.192,0.077-0.292,0.048c-0.1-0.026-0.184-0.095-0.229-0.187l-2.276-4.552c-0.156-0.312-0.648-0.312-0.805,0
                                                    L1.322,22.161z M23,5.36h7c0.75,0,1.36-0.61,1.36-1.36S30.75,2.64,30,2.64h-0.688c-0.158-0.576-0.687-1-1.312-1
                                                    c-0.335,0-0.643,0.122-0.88,0.324C26.735,1.181,25.93,0.64,25,0.64c-1.193,0-2.184,0.891-2.339,2.042
                                                    C22.074,2.833,21.64,3.367,21.64,4C21.64,4.75,22.25,5.36,23,5.36z M23,3.36c0.199,0,0.36-0.161,0.36-0.36
                                                    c0-0.904,0.735-1.64,1.64-1.64S26.64,2.096,26.64,3c0,0.199,0.161,0.36,0.36,0.36S27.36,3.199,27.36,3c0-0.353,0.287-0.64,0.64-0.64
                                                    S28.64,2.647,28.64,3c0,0.199,0.161,0.36,0.36,0.36h1c0.353,0,0.64,0.287,0.64,0.64S30.353,4.64,30,4.64h-7
                                                    c-0.353,0-0.64-0.287-0.64-0.64S22.647,3.36,23,3.36z" stroke='none' fill='gray' />
                                                </svg>
                                                <h1 className='text-white text-center font-bold'>Aucun message privé</h1>
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
                            <div className={
                                'bg-[#2c5b91] p-[10px] h-[70px] w-[50%] rounded-lg ml-[20px] mr-auto mt-[20px] mb-[20px] ' +
                                'grid grid-cols-[20%_auto] '
                            }>
                                <svg className='w-full h-full' viewBox='0 0 512 512'>
                                    <path d="M256,0C114.84,0,0,114.842,0,256s114.84,256,256,256s256-114.842,256-256S397.16,0,256,0z M256,462.452
                                    c-113.837,0-206.452-92.614-206.452-206.452S142.163,49.548,256,49.548S462.452,142.163,462.452,256S369.837,462.452,256,462.452z"
                                    stroke='white' fill='white'/>
                                    <polygon points="280.774,231.226 280.774,140.387 231.226,140.387 231.226,231.226 140.387,231.226 140.387,280.774
                                    231.226,280.774 231.226,371.613 280.774,371.613 280.774,280.774 371.613,280.774 371.613,231.226"
                                    fill='white' stroke='white'/>
                                </svg>
                                <h1 className='text-white ml-[5px]'>Rejoindre ou créer un serveur ?</h1>
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