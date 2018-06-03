import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './GameConfigStyle'
import Card from 'src/components/Card'
import SelectButton from 'src/components/SelectButton/SelectButton'

import defaultGameSetups from 'src/static/DefaultGameSetups'

export default class GameConfig extends Component {
  constructor(props) {
    super(props);
  }

  isSelected(gameObj) {
    return gameObj === this.props.Game
  }

  onPressHandler(gameSetup) {
    this.props.createGame(gameSetup)
    this.props.displayAndOpen({displayRoles: true}, {openGame: false, openRoles: true})
  }

  render() {
    return (
      <Card title='Game Configuration' collapsed={this.props.collapsed}>
        <View style={styles.buttonContainer}>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.fivePlayers)}>
            5 Players
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.sixPlayers)}>
            6 Players
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.sevenPlayers)}>
            7 Players
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.eightPlayers)}>
            8 Players
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.ninePlayers)}>
            9 Players
          </SelectButton>
        </View>
      </Card>
    )
  }
}
