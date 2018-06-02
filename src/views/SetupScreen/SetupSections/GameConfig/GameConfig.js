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
            GameConfig 1
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.sixPlayers)}>
            GameConfig 2
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.sevenPlayers)}>
            GameConfig 3
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.eightPlayers)}>
            GameConfig 4
          </SelectButton>
          <SelectButton linearGradient={styles.button} onPress={() => this.onPressHandler(defaultGameSetups.ninePlayers)}>
            GameConfig 5
          </SelectButton>
        </View>
      </Card>
    )
  }
}
