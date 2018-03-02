import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './HomeScreenStyle'

import Background from "../../components/Background"
import Card from '../../components/Card'

state = {
  collapsed: {
    gameConfig: false,
    rolesConfig: false,
    playersConfig: false
  }
}

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
          <Card title='sametime' isCollapsed={false}>
            <View>
              <Text> test </Text>
            </View>
          </Card>
        </Background>

    );
  }

}

