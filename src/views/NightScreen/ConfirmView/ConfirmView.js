import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import styles from './ConfirmViewStyle'
import Card from "src/components/Card"
import SelectButton from "src/components/SelectButton"
import {reverseCamelCase} from "src/utils/stringUtils";

export default class ConfirmView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      knownPlayers: [],
      revealedText: ""
    }
  }

  render() {
    console.log(this.props.players)
    let playerButtons = [];
    for (let i = 0; i < this.props.players.length; i++) {
      console.log("pushing player: ", this.props.players[i])
      playerButtons.push(
        <SelectButton key={i} linearGradient={styles.playerButton} onPress={() => this.props.finalCheckReturned(this.props.players[i])}>
          {this.props.players[i].name}
        </SelectButton>
      )
    }
    return (
      <View>
        <Text style={styles.headerText}>Does everyone know their role?</Text>
        <Text style={styles.text}>Confirm role for player...</Text>
        {playerButtons}
      </View>
    );
  }
}
