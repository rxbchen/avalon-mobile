import React, { Component } from 'react'
import { Text, View } from 'react-native'
import proptypes from 'prop-types'
import SelectButton from 'src/components/SelectButton'
import styles from './QuestHistoryViewStyle'
import Card from 'src/components/Card'

export default class QuestHistoryView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questHistory: []
    }
  }

  questObjects() {
    const validQuests = []

    for (let i = 0; i < this.props.quests.length; i++) {
      const currentQuest = this.props.quests[i]
      if (currentQuest['status'] === 'passed' || currentQuest['status'] === 'failed') {

        const proposals = []
        for (let j = 0; j < currentQuest["proposals"].length; j++) {
          proposals.push(
            <Card key={j}
                  title={currentQuest["proposals"][j]["captain"] + '\'s' + ' Proposal' }
                  style={styles.proposalCardContainer}
                  titleText={styles.proposalCardTitleText}
                  isCollapsed={true}
            >
              <View>
                <Text style={[styles.contentText, {marginBottom: 10}]}>Adventurers:
                  <Text style={styles.playersText}> {currentQuest["proposals"][j]["proposees"].join(", ")}</Text>
                </Text>
                <Text style={styles.contentText}>Accepted:
                  <Text style={styles.playersText}> {currentQuest["proposals"][j]["approved"].join(", ")}</Text>
                </Text>
                <Text style={styles.contentText}>Rejected:
                  <Text style={styles.playersText}> {currentQuest["proposals"][j]["rejected"].join(", ")}</Text>
                </Text>
              </View>
            </Card>
          )
        }
        validQuests.push(
          <Card key={i} 
                title={'Quest ' + (i+1) } 
                isCollapsed={true}
                style={{marginBottom: 20}}
          >
            {proposals}
          </Card>
        )
      }
    }
    return ( validQuests )
  }

  render() {
    return (
      <View style={{marginBottom: 20}}>
        <Text style={styles.title}>
          Quest History
        </Text>
        { this.questObjects() }
      </View>
    )
  }
}

QuestHistoryView.proptypes = {
  questHistory: proptypes.array
}