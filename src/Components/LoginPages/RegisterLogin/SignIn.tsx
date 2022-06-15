import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const OnClick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios({
            method: "post",
            url: `${API_URL}/api/auth/login`,
            data: {
                email: email,
                password: password
            },
            headers:{
                "access-control-allow-origin": "*"
            }
        }).then(res => {
            if (res.data.error) {
                document.getElementById("error")!.innerHTML = res.data.error;
            } else {
                localStorage.setItem("Alpinezy", res.data.token)
                localStorage.setItem("AlpinezyUsername", res.data.userinfo.username)
                localStorage.setItem("AlpinezyID", res.data.userinfo.id)
                window.location.href = "/thread";
            }
        })
    }

    return (
        <>
            <div className='flex justify-center'>

                <form className='bg-transparent text-black font-bold p-[10px] rounded-lg dshadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onSubmit={OnClick}>
                    <label className='text-[30px]'>Se connecter</label>
                    <br />
                    <br />


                    <input
                        type={"email"}
                        onChange={e => setEmail(e.target.value)}
                        className={" resize-none outline-none p-[10px] w-[300px] rounded-lg"}
                        placeholder={"E-mail"} />
                    <br />

                    <br />

                    <input
                        type={"password"}
                        onChange={e => setPassword(e.target.value)}
                        className={" resize-none outline-none p-[10px] w-[300px] rounded-lg"}
                        placeholder={"Mot de passe"} />
                    <br />

                    <NavLink to="/login/signup" className={"mt-[5px] float-right hover:underline hover:decoration-[#3B82F6]"}>
                        <h1 className='text-blue-500'>Mot de passe oublié ?</h1>
                    </NavLink>
                    <br />

                    <input type={"submit"} value={"Connexion"}
                        className='bg-[#61AF7F] text-[20px] font-bold p-[5px] mt-[10px] w-[300px] rounded-lg cursor-pointer' />
                    <br />

                    <div className='text-[red] text-center' id="error"></div>
                </form>
            </div>
            <hr className='w-[300px] m-auto mt-[5px]' />

            <h1 className='text-center mt-[5px]'>
                Pas de compte ? <NavLink to={'/login/signup'} className={"text-blue-500 font-bold hover:underline hover:decoration-[#3B82F6]"}>En créer un !</NavLink>
            </h1>

        </>
    );
};

export default SignIn;