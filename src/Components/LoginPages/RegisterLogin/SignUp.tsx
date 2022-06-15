import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../App';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [secPassword, setSecPassword] = useState("");

    const OnClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== secPassword) {
            document.getElementById("error")!.innerHTML = "Les mot de passe ne correspondent pas"
        } else

            axios({
                method: "post",
                url: `${API_URL}/api/auth/register`,
                data: {
                    pseudo: pseudo,
                    email: email,
                    password: password
                },
                headers:{
                    "access-control-allow-origin": "*"
                }
            }).then(res => {
                console.log(res.data)
                if (res.data.error) {
                    const error = document.getElementById("error");
                    error!.innerHTML = res.data.error
                } else {
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
                            document.getElementById("error")!.innerHTML = "Une erreur s'est produite"
                        } else {
                            localStorage.setItem("Alpinezy", res.data.token)
                            localStorage.setItem("AlpinezyUsername", res.data.userinfo.username)
                            localStorage.setItem("AlpinezyID", res.data.userinfo.id)
                            window.location.href = "/thread";
                        }
                    })
                }
            })
    }

    return (
        <>
            <div className='flex justify-center'>
                <form className='bg-[#9DC1BE] text-black font-bold p-[10px] rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' onSubmit={OnClick}>
                    <label className='text-[20px]'>S'inscrire</label>
                    <br />
                    <br />

                    <input
                        type={"text"}
                        onChange={e => setPseudo(e.target.value)}
                        className={"p-[5px] w-[300px] rounded-lg resize-none outline-none"}
                        placeholder={"Pseudo"} />
                    <br />
                    <br />


                    <input
                        type={"email"}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={"Email"}
                        className={"w-[300px] p-[5px] rounded-lg resize-none outline-none"} />
                    <br />
                    <br />


                    <input
                        type={"password"}
                        onChange={e => setPassword(e.target.value)}
                        placeholder={"Mot de passe"}
                        className={"p-[5px] w-[300px] rounded-lg resize-none outline-none"} />
                    <br />
                    <br />

                    <input
                        type={"password"}
                        onChange={e => setSecPassword(e.target.value)}
                        placeholder={"Réecrivez le mot de passe"}
                        className={"p-[5px] w-[300px] rounded-lg resize-none outline-none"} />
                    <br />
                    <br />

                    <input
                        type={"submit"}
                        value={"Créer ton compte"}
                        className={"p-[5px] bg-[#61AF7F] rounded-lg hover:cursor-pointer "} />
                    <div id="error" className='text-[red] text-center w-auto'></div>
                </form>
            </div>
            <br />
            <h1 className='text-center'>
                Tu as déjà un compte ? <NavLink to={"/login/signin"}
                    className={"text-blue-500 hover:underline hover:decoration-[#3B82F6]"}>Connect toi !</NavLink>
            </h1>
        </>
    );
};

export default SignUp;