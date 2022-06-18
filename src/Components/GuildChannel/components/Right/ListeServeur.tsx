import React, { useState } from 'react';

const ListeServeur = () => {
    const [ListeSelect, setListeSelect] = useState(0);

    return (
        <div className='w-full h-full flex justify-center items-start'>
            <div className='grid grid-rows-[32px_auto]'>
                {/* Boutons */}
                <div className='m-auto flex w-[60%] justify-between font-bold'>
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

                {/* Liste des serveur */}
                <div className='w-[350px] bg-[#1A4059] rounded-lg h-[435px]'>
                    <h1>dsjdlksj</h1>
                </div>
            </div>
        </div>
    );
};

export default ListeServeur;