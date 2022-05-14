import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const OnClick = (e: any) => {
        e.preventDefault();

        axios({
            method: "post",
            url: "http://192.168.1.38:9999/api/auth/login",
            data: {
                email: email,
                password: password
            }
        }).then(res => {
            if (res.data.error) {
                document.getElementById("error")!.innerHTML = res.data.error;
            } else {
                localStorage.setItem("Alpinezy", res.data.token)
                window.location.href = "/thread";
            }
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className='flex justify-center mt-[150px]'>

                <form className='bg-[#9DC1BE] text-black font-bold p-[10px] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onSubmit={OnClick}>
                    <label className='text-[20px]'>Se connecter</label>
                    <br />
                    <br />


                    <input
                        type={"email"}
                        onChange={e => setEmail(e.target.value)}
                        className={" resize-none outline-none p-[5px] w-[300px] rounded-lg"}
                        placeholder={"E-mail"} />
                    <br />

                    <br />

                    <input
                        type={"password"}
                        onChange={e => setPassword(e.target.value)}
                        className={" resize-none outline-none p-[5px] w-[300px] rounded-lg"}
                        placeholder={"Mot de passe"} />
                    <br />

                    <NavLink to="/login/signup" className={"text-right hover:underline hover:decoration-[#3B82F6]"}>
                        <h1 className='text-blue-500'>Mot de passe oublié ?</h1>
                    </NavLink>
                    
                    <input type={"submit"} value={"Connexion"}
                    className='bg-[#61AF7F] p-[5px] rounded-lg cursor-pointer' />
                    <br />

                    <div className='text-[red] text-center' id="error"></div>
                </form>
            </div>
            <br />

            <h1 className='text-center'>
                Pas de compte ? <NavLink to={'/login/signup'} className={"text-blue-500 hover:underline hover:decoration-[#3B82F6]"}>En créer un !</NavLink>
            </h1>
         
        </>
    );
};

export default SignIn;