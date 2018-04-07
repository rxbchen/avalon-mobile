import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import styles from './ConfirmViewStyle'
import SelectButton from "src/components/SelectButton"

export default class ConfirmView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      knownPlayers: [],
      revealedText: ""
    }
  }

  render() {
    let playerButtons = [];
    for (let i = 0; i < this.props.players.length; i++) {
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
        <SelectButton greenBackground>
          Continue
        </SelectButton>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.resetText}>Did something go wrong?</Text>
          <SelectButton linearGradient={styles.resetButton} onPress={() => this.props.returnToSetup()}>
            Reset
          </SelectButton>
        </View>
      </View>
    );
  }
}