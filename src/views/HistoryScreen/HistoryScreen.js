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

  viewQuestHistory() {
    this.setState({ 
      view_quest: this.state.view_quest = true,
    })
  }

  returnToHistory() {
    this.setState({
      view_quest: this.state.view_quest = false
    })
  }

  renderScreen() {
    console.log("Quest: " + this.state.view_quest)
    if (this.state.view_quest == true) {
      return (
        <QuestHistoryView players={this.props.players} quests={ this.props.quests }returnToHistory={ () => { this.returnToHistory() } }/>
      )
    }
    else {
      return(
        <View style={ styles.topButton }>
          <SelectButton linearGradient={ styles.topButton } onPress={ () => { this.viewQuestHistory() } }>
            View Quest History
          </SelectButton>
          <SelectButton linearGradient={ styles.topButton } onPress={ () => { this.backToQuest() } }>
            Go Back To Quest
          </SelectButton>
        </View>
      )
    }
  }
  
  render() {
    return (
      // quests Array -> QuestObject(captainIndex, adventurers)
      <Background>
        <View>
          { this.renderScreen() }
        </View>
      </Background>
    )
  }
}
