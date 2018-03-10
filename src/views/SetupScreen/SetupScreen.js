import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './SetupScreenStyle'
import { randomizeRoles } from "src/utils/helpers";
import Background from "src/components/Background/Background";
import SelectButton from "src/components/SelectButton"

import GameConfig from './SetupSections/GameConfig'
import RolesConfig from './SetupSections/RolesConfig'
import PlayersConfig from './SetupSections/PlayersConfig'


export default class SetupScreen extends Component {
  handleContinue() {
    const roles = randomizeRoles(this.props.game)
    this.props.assignRoles(roles)
    this.props.navigate({routeName: 'NightScreen'})
  }

  render() {
    return (
      <Background>
        <GameConfig/>
        <RolesConfig/>
        {this.props.game !== undefined ? <PlayersConfig/> : null}
        <SelectButton greenBackground onPress={() => this.handleContinue()}>Continue</SelectButton>
      </Background>
    )
  }
}
