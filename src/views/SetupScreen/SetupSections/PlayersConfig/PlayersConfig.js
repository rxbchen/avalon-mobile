import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './PlayersConfigStyle'
import LabelledInput from '../../../../src/components/LabelledInput'

export default class PlayersConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names: []}
  }

  isSelected(gameObj) {
    return gameObj === this.props.Game
  }

  validatePlayers(){
    //unique name and not null
  }

  addPlayer(index) {
    //todo
  }

  render() {
    let textInputs = [];
    for (let i = 0; i < this.props.game.numPlayers; i++) {
      textInputs.push(
      (
        <LabelledInput value={this.state.names[i]} placeholder={"Player " + (i+1)} onChange={() => this.addPlayer(i)}/>
      )
    )
    }
    return (
      <View>
        {textInputs}
        <TouchableOpacity onPress={() => this.validatePlayers()}>
          <Text>CONFIRM BUTTON</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
