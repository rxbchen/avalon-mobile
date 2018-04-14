import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'
import styles from './QuestScreenStyle'
import Card from 'src/components/Card'
import Background from 'src/components/Background'
import _ from 'lodash'

export default class QuestScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeQuest: _.find(this.props.quests, (quest) => {return quest.status === 'active'})
    }
  }

  render() {
    let QuestCards = this.props.quests.map((quest, i) => {
      return <Card title={"Quest" + (i + 1)} collapsed={!_.isEqual(quest, this.state.activeQuest)} >
        <Text> test</Text>
      </Card>
    })
    return (
      <Background>
        {QuestCards}
      </Background>
    )
  }
}
