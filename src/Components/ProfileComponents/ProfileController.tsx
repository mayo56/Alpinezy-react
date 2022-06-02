import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileError from './ProfileError';
import ProfileSuccess from './ProfileSuccess';

const ProfileController = () => {
    const id = Number(useParams().id);

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