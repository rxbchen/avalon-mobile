import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './HistoryScreenStyle'
import Background from "src/components/Background/Background"
import SelectButton from "src/components/SelectButton"

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view_player: false,
      view_quest: false
    }
  }

  viewPlayerHistory() {
    this.setState({ 
      view_player: this.state.view_player = true,
      view_quest: this.state.view_quest = false
    })
  }

  viewQuestHistory() {
    this.setState({ 
      view_quest: this.state.view_quest = true,
      view_player: this.state.view_player = false
    })
  }

  renderScreen() {
    console.log("history: " + this.state.overall_history + ", " + "player: " + this.state.view_player + ", " + "quest: " + this.state.view_quest)
    if (this.state.view_player) {
      return (
        <View>
          <Text>PlayerView</Text>
        </View>
      )
    }
    if (this.state.view_quest) {
      return (
        <View>
          <Text>QuestView</Text>
        </View>
      )
    }
  }
  
  render() {
    return (
      // quests Array -> QuestObject(captainIndex, adventurers)
      <Background>
        <View>
          <View>
            <SelectButton linearGradient={styles.topButton} onPress={() => { this.viewPlayerHistory() }}>
              View Player History
            </SelectButton>
            <SelectButton linearGradient={styles.topButton} onPress={() => { this.viewQuestHistory() }}>
              View Quest History
            </SelectButton>
          </View>
          { this.renderScreen() }
        </View>
      </Background>
    )
  }
}
