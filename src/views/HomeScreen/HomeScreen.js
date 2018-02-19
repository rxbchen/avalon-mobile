import React, { Component } from 'react';
<<<<<<< HEAD
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Avalon Mobile</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('Setup', { gameObject: {name: 'test', numRounds: 3} })}>
            <Text>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
=======
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyle'

export default class HomeScreen extends Component {
  render() {
    const navigateParams = {
      routeName: 'SetupScreen',
      params: {gameObject: {name: 'test', numRounds: 3}}
    };

    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Avalon Mobile</Text>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigate(navigateParams)
          }>
            <Text>Play</Text>
          </TouchableOpacity>
        </View>
>>>>>>> master
    );
  }
}
