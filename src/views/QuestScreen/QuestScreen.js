import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './QuestScreenStyle'
import Card from 'src/components/Card'
import SelectButton from 'src/components/SelectButton'
import Background from 'src/components/Background'
import _ from 'lodash'
import CustomDropdown from "../../components/Dropdown/Dropdown";

export default class QuestScreen extends Component {
  constructor(props) {
    super(props)
    let selectedPlayers = []
    for (let i = 0; i < this.props.players.length; ++i) {
      selectedPlayers.push(null)
    }
    this.state = {
      activeQuest: _.find(this.props.quests, (quest) => {return quest.status === 'active'}),
      selectedPlayers
    }
  }

  onSelectPlayer(value, index) {
    const selectedPlayers = _.cloneDeep(this.state.selectedPlayers)
    selectedPlayers[index] = value
    this.setState({selectedPlayers})
  }

  proposePlayers(quest) {
    const newQuest = Object.assign({}, quest)
    newQuest.adventurers = _.compact(this.state.selectedPlayers)
    this.props.updateQuest(newQuest)
    const navigateParams = {
      routeName: 'MissionScreen'
    }
    this.props.navigate(navigateParams)
  }

  getIcon(quest) {
    if (quest.status === 'passed') {
      return require('src/static/images/icons/blue-circle.png')
    } else if (quest.status === 'failed') {
      return require('src/static/images/icons/red-circle.png')
    } else if(quest.status === 'active') {
      return require('src/static/images/icons/green-circle.png')
    } else {
      return require('src/static/images/icons/grey-circle.png')
    }
  }

  getProposalInfo(quest) {
    let players = this.props.playerNames.map(playerName => {
      if (!this.state.selectedPlayers.includes(playerName)) {
        return {value: playerName}
      }
    })
    players = players.filter(player => player !== undefined)
    const getDropdowns = () => {
      let dropdowns = []
      for(let i = 0; i < quest.numAdventurers; ++i) {
        dropdowns.push(
          <CustomDropdown
            key={i}
            options={players}
            value=""
            onChange={(value) => this.onSelectPlayer(value, i)}
          />
        )
      }
      return dropdowns
    }
    return quest.status !== 'unvisited' ? (
      <View>
        <Text>Captain: {this.props.players[quest.captainIndex].name}</Text>
        <Text>Adventurers: </Text>
        { _.isEqual(this.state.activeQuest, quest) ?
          <View>
            {getDropdowns()}
            <SelectButton onPress={() => this.proposePlayers(quest)}>Vote</SelectButton>
          </View>
          :
          <View>
            { quest.adventurers.map((adventurer) => {
              return <Text>{adventurer}</Text>
            })}
          </View>
        }
      </View>
    ) : null
  }

  render() {
    let QuestCards = this.props.quests.map((quest, i) => {
      return <Card key={quest.id} title={"Quest" + (i + 1)} collapsed={!_.isEqual(quest, this.state.activeQuest)} icon={this.getIcon(quest)} >
        <View>
          <Text>{quest.numAdventurers} {quest.numAdventurers !== 1 ? 'Players' : 'Player'}</Text>
          <Text>{quest.reqFails} {quest.reqFails !== 1 ? 'Fails Required' : 'Fail Required'}</Text>
          <Text>{quest.failedVotes} {quest.failedVotes !== 1 ? 'Failed Votes' : 'Failed Vote'}</Text>
        </View>
        {this.getProposalInfo(quest)}
      </Card>
    })
    return (
      <Background>
        <View>
          {QuestCards}
        </View>
      </Background>
    )
  }
}
