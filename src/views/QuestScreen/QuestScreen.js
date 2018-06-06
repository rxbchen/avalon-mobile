import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './QuestScreenStyle'
import Card from 'src/components/Card'
import SelectButton from 'src/components/SelectButton'
import Background from 'src/components/Background'
import _ from 'lodash'
import CustomDropdown from "src/components/Dropdown/Dropdown";

export default class QuestScreen extends Component {
  static navigationOptions = {header: null}
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
    const proposal = {
      captain: this.props.players[quest.captainIndex].name,
      proposees: _.compact(this.state.selectedPlayers),
      approved: [],
      rejected: []
    }
    newQuest.proposals.push(proposal)
    this.props.updateQuest(newQuest)
    this.props.navigate({routeName: 'VoteScreen'})
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
    let players = this.props.playerNames.map((playerName) => {
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
      <View style={{margin: 10}}>
        <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>Captain:</Text> {this.props.players[quest.captainIndex].name}</Text>
        <Text style={[styles.text, {fontWeight:'bold'}]}>{this.state.activeQuest.id === quest.id ? 'Choose your Adventurers:' : 'Adventurers:'}</Text>
        { this.state.activeQuest.id === quest.id ?
          <View>
            {getDropdowns()}
            {_.compact(this.state.selectedPlayers).length < quest.numAdventurers ? null :
              <SelectButton confirm onPress={() => this.proposePlayers(quest)} linearGradientStyle={{marginTop: 10}} textStyle={{fontSize: 20}}>Vote</SelectButton>
            }
          </View>
          :
          <View>
            {
              quest.adventurers.map((adventurer, index) => {
                return <Text key={adventurer + index} style={styles.text}>{adventurer}</Text>
              })
            }
          </View>
        }
      </View>
    ) : null
  }

  render() {
    let QuestCards = this.props.quests.map((quest, i) => {
      return <Card key={quest.id} title={"Quest " + (i + 1)} style={styles.card} collapsed={!_.isEqual(quest, this.state.activeQuest)} icon={this.getIcon(quest)} >
        <View style={{margin: 10}}>
          { quest.status === 'passed' || quest.status === 'failed' ? (
              <Text style={[styles.text, {fontWeight: 'bold', fontSize: 18, marginBottom: 10}]}>
                {quest.status === 'passed' ? 'Quest Passed!' : 'Quest Failed!'}
              </Text>
            ): null
          }
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{quest.numAdventurers}</Text> {quest.numAdventurers !== 1 ? 'Players' : 'Player'}</Text>
          <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{quest.reqFails}</Text> {quest.reqFails !== 1 ? 'Fails Required' : 'Fail Required'}</Text>
          {
            quest.status !== 'unvisited' ?
              <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{quest.failedVotes}</Text> {quest.failedVotes !== 1 ? 'Failed Votes' : 'Failed Vote'}</Text>
            : null
          }
        </View>
        {this.getProposalInfo(quest)}
      </Card>
    })
    return (
      <Background title='Quest'>
        {/*<SelectButton linearGradientStyle={styles.historyButton} textStyle={{fontSize: 16, lineHeight: 18}} onPress={() => this.props.navigate({routeName: 'HistoryScreen'})}>*/}
          {/*History*/}
        {/*</SelectButton>*/}
        <View>
          {QuestCards}
        </View>
      </Background>
    )
  }
}
