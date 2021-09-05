import React from "react";

import {
    TouchableOpacity
} from 'react-native';

import ProfileIcon from '../../assets/Icons/ProfileIcon';

import profileButtonStyles from './ProfileButton.style';

const ProfileButton = () => {
    return (
        <TouchableOpacity style={profileButtonStyles.button}>
            <ProfileIcon></ProfileIcon>
        </TouchableOpacity>
    )
}

export default ProfileButton;