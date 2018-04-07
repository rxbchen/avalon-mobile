import React, { Component } from 'react'
import { Text, StatusBar } from 'react-native'
import styles from './QuestScreenStyle'
import Card from 'src/components/Card'
import Background from 'src/components/Background'

export default class QuestScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let QuestCards = this.props.quests.map((quest, i) => {
      return <Card title={"Quest" + (i + 1)} isCollapse={true}>
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
