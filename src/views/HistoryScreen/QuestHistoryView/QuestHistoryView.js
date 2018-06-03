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
      // dummy: [
      //   { 
      //     quest: {
      //       proposals: [ 
      //         { captain: 'name', propsee: ['name', 'what', 'lool'], rejected: ['name', 'what', 'lool'], approved: ['nope'] },
      //         { captain: 'what', propsee: ['name', 'what', 'lool'], rejected: ['name', 'what', 'lool'], approved: ['nope'] },
      //         { captain: 'lool', propsee: ['name', 'what', 'lool'], approved: ['name', 'what', 'lool'], rejected: ['nope'] }
      //       ],
      //       adventurers: ['name', 'what', 'lool']
      //     }
      //   },
      //   { 
      //     quest: {
      //       proposals: [ 
      //         { captain: 'name', propsee: ['name', 'what', 'lool'], rejected: ['name', 'what', 'lool'], approved: ['nope'] },
      //         { captain: 'what', propsee: ['name', 'what', 'lool'], rejected: ['name', 'what', 'lool'], approved: ['nope'] },
      //         { captain: 'lool', propsee: ['name', 'what', 'lool'], approved: ['name', 'what', 'lool'], rejected: ['nope'] }
      //       ],
      //       adventurers: ['name', 'what', 'lool']
      //     }
      //   }
      // ]
    }
  }

  questObjects() {
    var valid_quests = []

    console.log(this.props.quests)
    for (let i = 0; i < this.props.quests.length; i++) {
      var current_quest = this.props.quests[i]
      if (current_quest['status'] == 'active' || current_quest['status'] == 'visted') {
        
        // var valid_members = []
        // for (let j = 0; j < current_quest['adventurers'].length; j++) {
        //   if (current_quest['adventurers'][i]) {
        //     valid_members.push(current_quest['adventurers'][j])
        //   }
        // }
        // current_quest['adventurers'] = valid_members
        valid_quests.push(
          <Card key={i} title={'Quest: ' + current_quest["id"]+1 } isCollapsed={false}>
            <View>

              <Text>
                Captain: {this.props.players[current_quest["captainIndex"]].name}
              </Text>
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
        <SelectButton linearGradient={styles.backButton} onPress={() => this.props.returnToHistory()}>
          Back
        </SelectButton>
      </View>
    )
  }
}

QuestHistoryView.proptypes = {
  questHistory: proptypes.array
}