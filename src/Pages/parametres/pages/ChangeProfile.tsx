import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../../App';
import Compressor from 'compressorjs';

const ChangeProfile = () => {
    const [hey, setImage] = useState<File>();
    const [monImage, setMonImage] = useState<string>("")

    const SendImage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!hey) return;

        new Compressor(hey, {
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
                        setMonImage(res.data);
                    });
            },
            error(err) {
                console.log(err);
            }
        });
    };
    return (
        <div>
            <form encType='multipart/form-data' onSubmit={e => SendImage(e)}>
                <input type="file" name='image' accept='image/*' className='text-green-500' onChange={e => { setImage(e.currentTarget.files![0]) }} />
                <input type="submit" value="Submit" className='text-white' />
            </form>
            <img src={monImage ? `${API_URL}/api/user/avatar/${monImage}` : ""} alt="dqd" />
        </div>
    );
};
export default ChangeProfile;