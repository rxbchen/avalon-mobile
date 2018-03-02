import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyle'
import SelectButton from '../../components/SelectButton/SelectButton'
import Background from "../../components/Background/Background";

export default class HomeScreen extends Component {
  render() {
    const navigateParams = {
      routeName: 'SetupScreen'
    };

    return (
      <Background style={styles.main_container}>
        <Text style={styles.title}>Avalon Mobile</Text>

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigate(navigateParams)}>
            <Text>Play</Text>
          </TouchableOpacity>
          <SelectButton onPress={() => console.log('press')}>
            Play2!
          </SelectButton>
        </Background>
    );
  }

}
