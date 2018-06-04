import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
      <Background header={false} isScrollEnabled={false}>
        <View style={styles.container}>
          <Text style={styles.title}>AVALON MOBILE</Text>
          <SelectButton linearGradientStyle={styles.mainButton} onPress={() => this.props.navigate(navigateParams)}>
            PLAY
          </SelectButton>
          {/*<SelectButton linearGradientStyle={styles.smallButton}>*/}
            {/*MULTI-PHONE*/}
          {/*</SelectButton>*/}
          {/*<SelectButton linearGradientStyle={styles.smallButton}>*/}
            {/*STATISTICS*/}
          {/*</SelectButton>*/}
          {/*<SelectButton linearGradientStyle={styles.smallButton}>*/}
            {/*HELP*/}
          {/*</SelectButton>*/}
          {/*<SelectButton linearGradientStyle={styles.smallButton}>*/}
            {/*SETTINGS*/}
          {/*</SelectButton>*/}
        </View>
      </Background>
    );
  }
}

