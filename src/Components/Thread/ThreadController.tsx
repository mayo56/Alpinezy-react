import axios from 'axios';
import React, { useCallback, useDeferredValue, useEffect, useState } from 'react';
import { API_URL } from '../../App';
import ListeServeur from './LeftBar/ListeServeur';
import Profile from './LeftBar/Profile';
import Posts from './post/Posts';
import SendPost from './post/SendPost';
import Logs from './RightBar/Logs';
import News from './RightBar/News';

const ThreadController = () => {
    const [user, setUser] = useState({ id: 0, username: "", discriminator: "", avatarurl: "", bio: "" });
    const getUser = useCallback(async () => {
        await axios({
            method: 'get',
            url: `${API_URL}/api/user/get/${localStorage.getItem('AlpinezyID')}`,
        }).then(res => {
            setUser(res.data.user[0]);
        })
    }, []);
    useEffect(() => {
        getUser();
    }, [getUser]);
    const userInfo = useDeferredValue(user);
    return (
        <div className='grid grid-cols-3'>
            {/* Left bar */}
            <div>
                <div id="left" className='fixed'>
                    <Profile user={userInfo}/>
                    <ListeServeur/>
                    <br />
                </div>
            </div>


            {/* Post */}
            <div id="post" className=''>
                <SendPost user={userInfo}/>
                <Posts />
            </div>

            {/* right bar */}
            <div className='flex justify-end'>
                <div id='right' className='fixed mr-[20px] mt-[20px]'>
                    <News />
                    <Logs />
                </div>
            </div>

        </div>
    );
};

export default ThreadController;