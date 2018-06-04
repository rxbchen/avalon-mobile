import React, { Component } from "react"
import { View, Text } from "react-native"

import styles from "./HistoryScreenStyle"
import Background from "src/components/Background/Background"
import SelectButton from "src/components/SelectButton"
import QuestHistoryView from './QuestHistoryView'

export default class HistoryScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props)

    this.state = {
      view_quest: false
    }
  }

  backToQuest() {
    const navigateParams = {
      routeName: 'QuestScreen'
    }
    this.props.navigate(navigateParams)
  }

  renderScreen() {
    console.log("Quest: " + this.state.view_quest)
    return(
      <View>
        <View style={ styles.topButton }>
          <SelectButton linearGradient={ styles.topButton } onPress={ () => { this.backToQuest() } }>
            Go Back To Quest
          </SelectButton>
        </View>
        <QuestHistoryView players={this.props.players} quests={ this.props.quests } />
      </View>
    )
  }
  
  render() {
    return (
      // quests Array -> QuestObject(captainIndex, adventurers)
      <Background>
        { this.renderScreen() }
      </Background>
    )
  }
}
