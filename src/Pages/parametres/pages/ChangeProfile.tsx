import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../../App';
import Compressor from 'compressorjs';
import { USER } from '../../../Components/Thread/ThreadController';

const ChangeProfile = () => {
    const [inputImage, setImage] = useState<File>();
    const [user, setUser] = useState<USER[] | null>(null);

    const SendImage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!inputImage) return;
        new Compressor(inputImage, {
            quality: 0.6,
            async success(resultat) {
                const image = new FormData()
                image.append("file", resultat)
                await axios.post(`${API_URL}/api/user/setAvatar`, image, {
                    headers: {
                        "Authorization": localStorage.getItem("Alpinezy") as string,
                        "Access-Control-Allow-Origin": "https://api.alpinezy.com",
                        "Content-Type": 'multipart/form-data',
                    }
                })
                    .then(res => {
                        console.log(res.data);
                        setUser(e => {
                            e![0].avatarurl = res.data;
                            return e
                        })
                    });
            },
            error(err) {
                console.log(err);
            }
        });
    };
    const getUser = useCallback(async () => {
        await axios({
            method: "get",
            url: `${API_URL}/api/user/getWithAuth/${localStorage.getItem("AlpinezyID")}`,
            headers: {
                "Authorization": localStorage.getItem("Alpinezy") as string
            }
        }).then(res => {
            setUser(res.data.user);
        })
    }, []);
    useEffect(() => {
        return () => {
            getUser()
        }
    }, []);
    return (
        <div>
            {
                user?.map(e => {
                    return (
                        <div>
                            <h1>{e.username}#{e.discriminator}</h1>
                            <img src={user ? `${API_URL}/api/user/avatar/${e.avatarurl}` : ""} alt="" className='w-[500px]' />
                        </div>
                    )
                })
            }
            <form encType='multipart/form-data' onSubmit={e => SendImage(e)}>
                <input type="file" name='lol' accept='image/*' className='text-green-500' onChange={e => { setImage(e.currentTarget.files![0]) }} />
                <input type="submit" value="Submit" className='text-white' />
            </form>
        </div>
    );
};
export default ChangeProfile;