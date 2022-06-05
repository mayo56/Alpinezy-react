import React from 'react';
import Banner from './Components/Success/Banner';
import Post from './Components/Success/Post';
import ProfileCard from './Components/Success/ProfileCard';

const ProfileSuccess = () => {
    
    return (
        <div>
            <Banner />
            <div className='bg-[#171723] grid grid-cols-2'>
                <Post />
                <ProfileCard />
            </div>

        </div>
    );
};

export default ProfileSuccess;
