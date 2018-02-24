import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './GameConfigStyle'

import defaultGameSetups from '../../../../static/DefaultGameSetups'

export default class GameConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameObj: {}
    }
  }

  setGame(gameObj) {
    this.setState({gameObj});
    this.props.createGame(gameObj);
    }

  isSelected(gameObj) {
    return gameObj === this.state.gameObj
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.setGame(defaultGameSetups.fivePlayers)}>
          <Text>GameConfig 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>GameConfig 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>GameConfig 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>GameConfig 4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>GameConfig 5</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
