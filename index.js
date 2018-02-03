import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import { StackNavigator } from 'react-navigation';

import HomeScreen from "./views/HomeScreen.js"
import SetupScreen from "./views/SetupScreen.js"



const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Setup: {
        screen: SetupScreen
    }
});

export default RootNavigator;

AppRegistry.registerComponent('AvalonMobile', () => RootNavigator);