import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { API_URL } from '../../App';
import ListeServeur from './LeftBar/ListeServeur';
import Profile from './LeftBar/Profile';
import Posts from './post/Posts';
import SendPost from './post/SendPost';
import Logs from './RightBar/Logs';
import News from './RightBar/News';

export interface badges {
    id: number;
    nom: string;
    description: string;
    svg: string;
    fill: string;
    stroke: string
}

export interface USER {
    id: number; username: string;
    discriminator: string; avatarurl: string;
    bio: string; following: string; follower: string;
    privatemessage: string; serveur: string;
    badges: string; badgesshow: string;
}

const ThreadController = () => {
    const [user, setUser] = useState<USER>();
    const [badges, setBadges] = useState<badges[]>();
    
    const getUser = async () => {
        await axios({
            method: 'get',
            url: `${API_URL}/api/user/getWithAuth/${localStorage.getItem('AlpinezyID')}`,
            headers: {
                'Authorization': `${localStorage.getItem('Alpinezy')}`
            }
        }).then(res => {
            setUser(res.data.user[0]);
        })
    };

    const getBadge = async () => {
        if (!user) return;
        const listeBadges = user.badgesshow.split(',');
        let listBadgesShow: badges[] = [];
        for (let i = 0; i < listeBadges.length; i++) {
            await axios({
                method: 'get',
                url: `${API_URL}/api/AIG/badge/${listeBadges[i]}`,
            }).then(res => {
                listBadgesShow.push(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        setBadges(listBadgesShow.flat(1));
    }

    useEffect(() => {
        getUser()
        getBadge();
        console.log(user)
    }, [user]);
    return (
        
            <div className='grid grid-cols-3'>
                {/* Left bar */}
                <div>
                    <div id="left" className='fixed'>
                        <Profile badges={badges!} user={user!} />
                        <ListeServeur />
                        <br />
                    </div>
                </div>


                {/* Post */}
                <div id="post" className='m-auto'>
                    <SendPost user={user!} />
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