/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/components/StackNavigator/StackNavigator';







export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <StackNavigator backgroundColor="#1c003f" textColor="#ffffff" />
      </NavigationContainer >
    );
  }
}
