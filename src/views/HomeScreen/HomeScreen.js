import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyle'
import SelectButton from '../../components/SelectButton/SelectButton'

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
          <SelectButton>
            Play2!
          </SelectButton>
        </View>
    );
  }
}