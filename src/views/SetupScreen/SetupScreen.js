import React, { Component } from 'react';
import _ from 'lodash'
import { StackNavigator } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './SetupScreenStyle'
import { randomizeRoles } from "src/utils/helpers"
import Background from "src/components/Background/Background"
import SelectButton from "src/components/SelectButton"

import GameConfig from './SetupSections/GameConfig'
import RolesConfig from './SetupSections/RolesConfig'
import PlayersConfig from './SetupSections/PlayersConfig'


export default class SetupScreen extends Component {
  constructor(props) {
    super(props)
    const emptyGame = _.isEmpty(this.props.game)
    const displayCards = {displayRoles: !emptyGame, displayPlayers: !emptyGame, displayButton: !emptyGame}
    const openCards = {openGame: emptyGame, openRoles: false, openPlayers: false}

    this.state = {displayCards, openCards}
  }

  handleContinue() {
    const roles = randomizeRoles(this.props.game)
    this.props.assignRoles(roles)
    this.props.navigate({routeName: 'NightScreen'})
  }

  displayAndOpen(display, open) {
    const displayCards = Object.assign({}, this.state.displayCards, display)
    const openCards = Object.assign({}, this.state.openCards, open)

    this.setState({displayCards, openCards})
  }

  render() {
    const {displayRoles, displayPlayers, displayButton} = this.state.displayCards
    const {openGame, openRoles, openPlayers} = this.state.openCards

    return (
      <Background>
        <GameConfig collapsed={!openGame} displayAndOpen={(display, open) => this.displayAndOpen(display, open)}/>
        {displayRoles ? <RolesConfig collapsed={!openRoles} displayAndOpen={(display, open) => this.displayAndOpen(display, open)}/> : null}
        {displayPlayers ? <PlayersConfig collapsed={!openPlayers} displayAndOpen={(display, open) => this.displayAndOpen(display, open)}/> : null}
        {displayButton ? <SelectButton greenBackground onPress={() => this.handleContinue()}>Continue</SelectButton> : null}
      </Background>
    )
  }
}
