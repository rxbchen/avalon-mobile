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
          <View style={styles.mainContainer}>
            <SelectButton style={styles.main_button} onPress={() => this.props.navigate(navigateParams)}>
              PLAY
            </SelectButton>
          </View>
        <View style={styles.smallButtonContainer}>
          <SelectButton style={styles.button}>
            MULTI-PHONE
          </SelectButton>
          <SelectButton style={styles.button}>
            STATISTICS
          </SelectButton>
          <SelectButton style={styles.button}>
            HELP
          </SelectButton>
          <SelectButton style={styles.button}>
            SETTINGS
          </SelectButton>
        </View>
        </Background>
    );
  }
}
