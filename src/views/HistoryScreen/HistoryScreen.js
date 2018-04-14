import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './HistoryScreenStyle'
import Background from "src/components/Background/Background"

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      overall_history: true,
      view_player: false,
      view_quest: false
    }
  }

  viewOverallHistory() {
    this.setState({ 
      view_player: this.state.view_player = false,
      view_quest: this.state.view_quest = false,
      overall_history: this.state.overall_history = true
    })
  }

  viewPlayerHistory() {
    this.setState({ 
      view_player: this.state.view_player = true,
      overall_history: this.state.overall_history = false
    })
  }

  viewQuestHistory() {
    this.setState({ 
      view_player: this.state.view_quest = true,
      overall_history: this.state.overall_history = false
    })
  }

  renderScreen() {
    if (this.state.overall_history) {
      return (
        <View>
          <Text>Should be overall</Text>
        </View>
      )
    }
    else {
      if (this.state.view_player) {
        return (
          <View>
            <Text>PlayerView</Text>
          </View>
        )
      }
      if (this.state.view_quest) {
        <View>
          <Text>QuestView</Text>
        </View>
      }
    }
  }
  
  render() {
    return (
      <Background>
        <View>
          { this.renderScreen() }
        </View>
      </Background>
    )
  }
}
