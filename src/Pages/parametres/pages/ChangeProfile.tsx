import axios from 'axios';
import React, { useState } from 'react';

const ChangeProfile = () => {
    {/* Page for change user avatr with form */ }
    const [image, setImage] = useState({});

    const SendImage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await axios.post("http://192.168.1.38:9999/api/user/setAvatar", image).then(res => {
            console.log(res.data);
        });
    }
    return (
        <div>
            <form encType='multipart/form-data' onSubmit={e => SendImage(e)}>
                <input type="file" name='image' accept='image/jpeg, image/jpg, image/png' className='text-green-500' onChange={e => setImage(e.currentTarget.files![0])} />
                <input type="submit" value="Submit" className='text-white' />
            </form>
        </div>
    );
};

export default ChangeProfile;