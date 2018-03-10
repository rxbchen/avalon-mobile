import React from 'react'
import { View, Text } from 'react-native'
import styles from './NightScreenStyle'

import Background from "src/components/Background/Background"


export default class SetupScreen extends React.Component {
  render() {
    return (
      <Background>
        <View>
          <Text style={styles.container}>
            Sup
          </Text>
        </View>
      </Background>
    )
  }
}
