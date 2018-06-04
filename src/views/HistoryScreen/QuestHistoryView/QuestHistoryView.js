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
    var valid_quests = []

    console.log(this.props.quests)
    for (let i = 0; i < this.props.quests.length; i++) {
      var current_quest = this.props.quests[i]
      if (current_quest['status'] === 'passed' || current_quest['status'] === 'failed') {
        
        // var valid_members = []
        // for (let j = 0; j < current_quest['adventurers'].length; j++) {
        //   if (current_quest['adventurers'][i]) {
        //     valid_members.push(current_quest['adventurers'][j])
        //   }
        // }
        // current_quest['adventurers'] = valid_members
        var proposals = []
        for (let j = 0; j < current_quest["proposals"].length; j++) {
          proposals.push(
            <Card key={j} title={current_quest["proposals"][j]["captain"] + '\'s' + ' Proposal' } titleContainer={styles.cardTitleContainer} titleText={styles.cardTitleText} isCollapsed={true}>
              <View>
                <Text style={styles.adventureInfoText}>Adventurers:
                  <Text style={styles.questInfoText}> {current_quest["proposals"][j]["proposees"].join(", ")}</Text>
                </Text>
                <Text style={styles.otherInfoText}>Accepted:
                  <Text style={styles.questInfoText}> {current_quest["proposals"][j]["approved"].join(", ")}</Text>
                </Text>
                <Text style={styles.otherInfoText}>Rejected:
                  <Text style={styles.questInfoText}> {current_quest["proposals"][j]["rejected"].join(", ")}</Text>
                </Text>
              </View>
            </Card>
          )
        }
        valid_quests.push(
          <Card key={i} title={'Quest ' + (i+1) } isCollapsed={true}>
            <View style={styles.cardContainer}>
              {proposals}
            </View>
          </Card>
        )
        console.log(current_quest)
      }
    }
    return ( valid_quests )
  }

  render() {
    return (
      <View style={styles.container}>
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