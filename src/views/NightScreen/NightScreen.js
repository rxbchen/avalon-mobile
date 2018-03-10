import React from 'react'
import { View } from 'react-native'
import styles from './NightScreenStyle'

import Background from "src/components/Background/Background"


export default class SetupScreen extends React.Component {
  render() {
    return (
      <Background>
        <View style={styles.container}>
          Sup
        </View>
      </Background>
    )
  }
}
