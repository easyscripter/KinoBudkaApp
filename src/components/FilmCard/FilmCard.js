import React from "react";

import {
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';


import filmCardStyles from './FilmCard.styles';

const FilmCard = ({ imagehref, cardTitle }) => {
    return (
        <TouchableOpacity style={filmCardStyles.card}>
            <Image style={filmCardStyles.cardImage} source={{ uri: imagehref }}></Image>
            <Text style={filmCardStyles.cardText}>{cardTitle}</Text>
        </TouchableOpacity>
    )
}

export default FilmCard;