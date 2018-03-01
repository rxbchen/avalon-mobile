import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './PlayersConfigStyle'
import LabelledInput from '../../../../components/LabelledInput'
import defaultGameSetups from "../../../../static/DefaultGameSetups";

export default class PlayersConfig extends React.Component {
  constructor(props) {
    super(props);
    this.state = {names: []}
  }

  //Comments from February 28th
  /*
    Pop up error message when submitting duplicate name
    Allow users to type out full name, then validate on submit (move from onchange)
    style text input boxes (vertical margins)
    style in general.
    zero testing on redux at the moment
   */
  componentWillReceiveProps(nextProps){
    const newNames = []
    const numPlayers = nextProps.game.numPlayers
    for (let i = 0; i < numPlayers; i++){
      newNames.push("")
    }
    nextProps.players.forEach((playerObj, index) => {
      newNames[index] = playerObj.name
    })
    this.setState({names: newNames})
  }

  isSelected(gameObj) {
    return gameObj === this.props.Game
  }

  validatePlayerName(name){
    //unique name and not null
    if (!name) return false
    let uniqueName = true
    this.state.names.forEach((stateName) => {
      if (name === stateName) uniqueName = false
    })
    return uniqueName
  }

  addPlayer(event, index) {
    const name = event.nativeEvent.text
    if (this.validatePlayerName(name)) {
      const newNames = this.state.names.slice(0)
      newNames[index] = name
      this.setState({names: newNames})
    }
  }

  render() {
    let textInputs = [];
    for (let i = 0; i < this.props.game.numPlayers; i++) {
      textInputs.push(
        <LabelledInput key={i} value={this.state.names[i]} placeholder={"Player " + (i+1)} onChange={(event) => this.addPlayer(event, i)}/>
      )
    }
    console.log("Redux testing", this.props.players)
    return (
      <View>
        {textInputs}
        <TouchableOpacity onPress={() => this.props.createPlayers(this.state.names)}>
          <Text>Save and Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
