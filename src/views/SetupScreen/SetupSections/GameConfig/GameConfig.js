import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './GameConfigStyle'
import Card from 'src/components/Card'

import defaultGameSetups from '../../../../static/DefaultGameSetups'

export default class GameConfig extends Component {
  constructor(props) {
    super(props);
  }

  isSelected(gameObj) {
    return gameObj === this.props.Game
  }

  render() {
    return (
      <Card title='Game Configuration' isCollapsed={false}>
        <View>
          <TouchableOpacity onPress={() => this.props.createGame(defaultGameSetups.fivePlayers) }>
            <Text>GameConfig 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.createGame(defaultGameSetups.sixPlayers)}>
            <Text>GameConfig 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.createGame(defaultGameSetups.sevenPlayers)}>
            <Text>GameConfig 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.createGame(defaultGameSetups.eightPlayers)}>
            <Text>GameConfig 4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.createGame(defaultGameSetups.ninePlayers)}>
            <Text>GameConfig 5</Text>
          </TouchableOpacity>
        </View>
      </Card>
    )
  }
}
