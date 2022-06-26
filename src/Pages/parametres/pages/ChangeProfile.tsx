import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../../App';

const ChangeProfile = () => {
    const [hey, setImage] = useState<FileList>();
    const [monImage, setMonImage] = useState<string>("")

    const SendImage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const image = new FormData()
        image.append("file", hey![0])
        
        console.log(image)
        await axios.post(`${API_URL}/api/user/setAvatar`, image, { headers: {
            "Authorization": localStorage.getItem("Alpinezy") as string,
            "Content-Type": 'multipart/form-data',
            "Access-Control-Allow-Origin":"*"
        }})
            .then(res => {
                console.log(res.data);
                setMonImage(res.data)
            });
    };
    return (
        <div>
            <form encType='multipart/form-data' onSubmit={e => SendImage(e)}>
                <input type="file" name='image' accept='image/jpeg, image/jpg, image/png' className='text-green-500' onChange={e => {setImage(e.currentTarget.files!)}} />
                <input type="submit" value="Submit" className='text-white' />
            </form>
            <img src={monImage ? `${API_URL}/api/user/avatar/${monImage}` : ""} alt="dqd" />
        </div>
    );
};
export default ChangeProfile;