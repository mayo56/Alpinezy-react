import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileError from './ProfileError';
import ProfileSuccess from './ProfileSuccess';

const ProfileController = () => {
    const id = Number(useParams().id);

    console.log(Number(id))

    return (
        <div>
            {
                isNaN(id) ? (
                    <ProfileError />
                ) : (
                    <ProfileSuccess />
                )
            }
        </div>
    );

};

export default ProfileController;