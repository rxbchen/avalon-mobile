import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyle'
import SelectButton from 'src/components/SelectButton/SelectButton'
import Background from "src/components/Background/Background";
import SpacedLetters from 'react-native-letter-spacing'

export default class HomeScreen extends Component {
  render() {
    const navigateParams = {
      routeName: 'SetupScreen'
    };

    //Space is intentional in title as the A and M aren't aligned otherwise
    return (
      <Background style={styles.main_container}>
        <Text style={styles.title}> AVALON{"\n"}MOBILE</Text>
          <SelectButton style={styles.button} onPress={() => this.props.navigate(navigateParams)}>
            Play
          </SelectButton>
          <SelectButton onPress={() => console.log('press')}>
            Play2!
          </SelectButton>
        </Background>
    );
  }
}
