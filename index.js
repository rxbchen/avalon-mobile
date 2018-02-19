import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src';

<<<<<<< HEAD
import HomeScreen from "./src/views/HomeScreen"
import SetupScreen from "./src/views/SetupScreen"

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
=======
AppRegistry.registerComponent('AvalonMobile', () => App);
>>>>>>> master
