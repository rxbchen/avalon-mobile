import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './SetupScreenStyle'

import GameConfig from './SetupSections/GameConfig'
import PlayersConfig from './SetupSections/PlayersConfig'
import Background from "../../components/Background/Background";

export default class SetupScreen extends Component {
    render() {
      return (
        <Background>
          <GameConfig/>
          {this.props.game !== undefined ? <PlayersConfig/> : null}
        </Background>
      )
    }
}
