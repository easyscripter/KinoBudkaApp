import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import FilmScreen from '../../screens/FilmScreen/FilmScreen';
import ProfileButton from '../ProfileButton/ProfileButton';



const { Navigator, Screen } = createStackNavigator();

const ScreensOptions = {
    Home: {
        title: 'Главная',
        headerRight: () => <ProfileButton />
    },

}

const StackNavigator = ({ backgroundColor, textColor }) => {

    return (
        <Navigator screenOptions={{
            headerStyle: { backgroundColor: backgroundColor },
            headerTitleStyle: {
                color: textColor,
                fontWeight: 'bold'
            }
        }}>
            <Screen name="Home" component={HomeScreen} options={ScreensOptions.Home} ></Screen>
            <Screen name="FilmScreen" component={FilmScreen}></Screen>
        </Navigator>
    )
}

export default StackNavigator