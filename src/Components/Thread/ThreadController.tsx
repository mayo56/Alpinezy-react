import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../App';
import ListeServeur from './LeftBar/ListeServeur';
import Profile from './LeftBar/Profile';
import Posts from './post/Posts';
import SendPost from './post/SendPost';
import Logs from './RightBar/Logs';
import News from './RightBar/News';

export interface badges {
    id: number; nom: string;
    description: string;
    svg: string; fill: string; stroke: string
}

export interface USER {
    id: number; username: string;
    discriminator: string; avatarurl: string;
    bio: string; following: string; follower: string;
    privatemessage: string; serveur: string;
    badges: string; badgesshow: string;
}

const ThreadController = () => {
    const [user, setUser] = useState<USER | null>(null);
    const [badges, setBadges] = useState<badges[] | null>(null);
    const [lol, setLol] = useState(0)
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
        const listeBadges = user!.badgesshow.split(',');
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
        getUser();
        console.warn("User load...");
    }, []);
    if (lol === 0 && user) {
        getBadge();
        setLol(1);
        console.warn("Badges load..");
    };
    return (
        <div className={
            'grid grid-cols-[minmax(440px,_0px)_minmax(700px,_1fr)_minmax(440px,_0px)]'
        }>
            {/* Left bar */}
            <div className='flex justify-center h-[100vh] mt-[20px]'>
                <div id="left" className='fixed'>
                    <Profile badges={badges} user={user} />
                    <ListeServeur />
                    <br />
                </div>
            </div>


            {/* Post */}
            <div id="post" className='flex justify-center'>
                <div>
                    <SendPost badges={badges} user={user} />
                    <Posts />
                </div>
            </div>

            {/* right bar */}
            <div className='flex h-[100vh] justify-center items-start mt-[20px]'>
                <div id='right' className='fixed'>
                    <News />
                    <Logs />
                </div>
            </div>
        </div>
    );
};

export default ThreadController;