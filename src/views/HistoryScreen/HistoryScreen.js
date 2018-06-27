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

  render() {
    return (
      <Background title='History'>
        <View>
          <SelectButton linearGradientStyle={ styles.questButton } textStyle={{fontSize: 16, lineHeight: 18}} onPress={ () => { this.backToQuest() } }>
            Go Back To Quest
          </SelectButton>
          <QuestHistoryView players={this.props.players} quests={ this.props.quests } />
        </View>
      </Background>
    )
  }
}
