import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './SetupScreenStyle'

import GameConfig from './SetupSections/GameConfig'
import PlayersConfig from './SetupSections/PlayersConfig'
import Background from "../../components/Background/Background";
import RoleConfig from "./SetupSections/RoleConfig";

export default class SetupScreen extends Component {
    render() {
      return (
        <Background>
          <GameConfig/>
          <RoleConfig/>
          {this.props.game !== undefined ? <PlayersConfig/> : null}
        </Background>
      )
    }
}
