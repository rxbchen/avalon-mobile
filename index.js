import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from './src';

import HomeScreen from "./src/views/HomeScreen"
import SetupScreen from "./src/views/SetupScreen"


//
// const RootNavigator = StackNavigator({
//     Home: {
//         screen: HomeScreen,
//     },
//     Setup: {
//         screen: SetupScreen
//     }
// });
//
// export default RootNavigator;
//
// AppRegistry.registerComponent('AvalonMobile', () => RootNavigator);
console.log('start')
AppRegistry.registerComponent('AvalonMobile', () => App);