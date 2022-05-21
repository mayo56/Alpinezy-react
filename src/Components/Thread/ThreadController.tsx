import React from 'react';
import ListeServeur from './LeftBar/ListeServeur';
import Profile from './LeftBar/Profile';
import Posts from './post/Posts';
import SendPost from './post/SendPost';
import Logs from './RightBar/Logs';
import News from './RightBar/News';

const ThreadController = () => {
    return (
        <div className='grid grid-cols-3'>
            {/* Left bar */}
            <div>
                <div id="left" className='fixed'>
                    <Profile />
                    <ListeServeur />
                    <br />
                </div>
            </div>


            {/* Post */}
            <div id="post" className=''>
                <SendPost />
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