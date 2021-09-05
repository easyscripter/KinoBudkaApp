import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';

import homeScreenStyles from './HomeScreen.styles';

import FilmCard from '../../components/FilmCard/FilmCard'


const filmData = [
    {
        id: 1,
        title: 'Плохие парни',
        image: 'https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/9656996-1161552.jpg',
        description: 'Фильм о парнях плохих'
    },
    {
        id: 2,
        title: 'Звездные войны',
        image: 'https://static.wikia.nocookie.net/rustarwars/images/7/79/The_Phantom_Menace.jpg/revision/latest?cb=20140903183608',
        description: 'Фильм о звездных войнах'
    },
]

const HomeScreen = ({ }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={homeScreenStyles.cardList}>
                    {filmData.length > 0 ? filmData.map(film => (
                        <FilmCard key={film.id} cardTitle={film.title} imagehref={film.image} />
                    )) : (
                        <Text>Фильмов не найдено!</Text>
                    )}

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;