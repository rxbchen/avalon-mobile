import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'
import styles from './HomeScreenStyle'
import SelectButton from 'src/components/SelectButton/SelectButton'
import Background from "src/components/Background"

export default class HomeScreen extends Component {
  static navigationOptions = { header: null }

  render() {
    const navigateParams = {
      routeName: 'SetupScreen'
    }

    return (
      <Background header={false} style={styles.main_container} isScrollEnabled={false}>
        <Text style={styles.title}>AVALON MOBILE</Text>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.navigate(navigateParams)}>
          PLAY
        </SelectButton>
        <SelectButton linearGradient={styles.smallButton}>
          MULTI-PHONE
        </SelectButton>
        <SelectButton linearGradient={styles.smallButton}>
          STATISTICS
        </SelectButton>
        <SelectButton linearGradient={styles.smallButton}>
          HELP
        </SelectButton>
        <SelectButton linearGradient={styles.smallButton}>
          SETTINGS
        </SelectButton>
      </Background>
    );
  }
}

