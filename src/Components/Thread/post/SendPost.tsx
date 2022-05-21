import React, { useState } from 'react';

const SendPost = () => {
    const Pseudo = localStorage.getItem("AlpinezyUsername");
    const [input, setInput] = useState("")
    const Compteur = (<h1 className={input.length > 1024? "text-[red] flex" : "flex"}>{input.length}<h1 className='text-black'>/1024</h1></h1>)
    return (
        <div>
            <div className='m-auto mt-[20px] grid grid-rows-3 rounded-lg bg-[#325D79] w-[600px] h-[350px]'>
                {/* Profile */}
                <div className='grid grid-cols-2 w-[200px] ml-[20px] mt-[20px] bg-[red] h-[50px] row-span-1'>
                    <img src={require("../LeftBar/imgTemp/xiao.jpg")} alt="pp" className='w-[50px] h-[50px] ml-[20px] rounded-full' />
                    <div>
                        <h1>{Pseudo}</h1>
                        <h1>A B C</h1>
                    </div>
                </div>

                {/* input de post */}
                <div className='h-[200px] -translate-y-[10px] w-[600px] flex justify-center row-span-2'>
                    <textarea placeholder='Ecrit nous un petit mot !'
                    onChange={e => setInput(e.target.value)}
                    className='text-white p-[10px] min-h-[90%] max-h-[90%] w-[90%] h-[90%] rounded-lg bg-[#1A4059] resize-none outline-none'></textarea>
                </div>
                <h1 id="nb_caractere" className={input.length > 1024 ? 'mr-[5%] row-span-2 flex justify-end font-bold text-[red]': "mr-[5%] flex justify-end font-bold row-span-2"}>
                    {input.length > 512 ?  Compteur : ""}</h1>

                {/* Boutons post! et image */}
                <div className='h-[50px] row-span-3 grid grid-cols-3'>
                    <h1>img{input.length}</h1>
                    <h1>Send !</h1>
                    <div>
                        <h1 className='text-[red]'>Error</h1>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SendPost;