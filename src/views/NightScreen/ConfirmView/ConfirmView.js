import React, { Component } from 'react';
import { Text, View} from 'react-native'
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

  continueToQuest() {
    const navigateParams = {
      routeName: 'QuestScreen'
    }
    this.props.createQuests()
    this.props.navigate(navigateParams)
  }

  returnToSetup() {
    const navigateParams = {
      routeName: 'SetupScreen'
    }
    this.props.navigate(navigateParams)
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
        <SelectButton greenBackground onPress={()=> this.continueToQuest()}>
          Continue
        </SelectButton>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.resetText}>Did something go wrong?</Text>
          <SelectButton linearGradient={styles.resetButton} onPress={() => this.returnToSetup()}>
            Reset
          </SelectButton>
        </View>
      </View>
    );
  }
}
