import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './VoteScreenStyle'
import SelectButton from 'src/components/SelectButton'
import Background from 'src/components/Background'
import _ from 'lodash'

export default class QuestScreen extends Component {
    constructor(props) {
      super(props)
      const playerVotes = []
      this.props.players.forEach((player) => {
        playerVotes.push({
          name: player.name,
          voted: 'None'
        })
      })

      this.state = {
        voteCount: 0,
        voteComplete: false,
        error: false,
        passed: false,
        playerVotes,
      }
    }

    getActiveQuest() {
      for (let i = 0; i < this.props.quests.length; i++) {
        if (this.props.quests[i].status === 'active') {
          return _.cloneDeep(this.props.quests[i])
        }
      }
    }

    vote(player, vote) {
      const playerVotes = _.cloneDeep(this.state.playerVotes)
      let voteCount = this.state.voteCount
      if (vote === 'None') {
        voteCount--
      } else {
        voteCount++
      }

      if (voteCount === this.state.playerVotes.length) {
        this.setState({error: false})
      }
      for (let i=0; i < playerVotes.length; i++) {
        if (playerVotes[i].name === player.name) {
          playerVotes[i].voted = vote
          break
        }
      }
      this.setState({playerVotes, voteCount})
    }

    getVoteButtons(player) {
      return player.voted === 'None' ? (
        <View style={styles.voteButtons}>
          <SelectButton linearGradient={styles.voteButton} textStyle={styles.voteButtonText} onPress={() => this.vote(player, 'Approved')}>✔</SelectButton>
          <SelectButton linearGradient={styles.voteButton} textStyle={styles.voteButtonText} onPress={() => this.vote(player, 'Rejected')}>✖</SelectButton>
        </View>
      ) : (
        <SelectButton linearGradient={styles.editButton} textStyle={{fontSize: 20}} onPress={() => this.vote(player, 'None')}>Edit</SelectButton>
      )
    }

    onContinue() {
      let approved = 0
      const quest = this.getActiveQuest()

      if (this.state.voteCount < this.state.playerVotes.length) {
        // error if not everyone voted
        this.setState({error: true})
      } else if (!this.state.voteComplete) {
        // Take all votes and see if overall vote passed or failed then set voteComplete state to true
        this.state.playerVotes.forEach((player) => {
          if (player.voted === 'Approved') approved++
        })
        this.setState({voteComplete: true, passed: approved > this.state.playerVotes.length/2})
      } else {
        for (let i=0; i<this.state.playerVotes.length; i++) {
          if (this.state.playerVotes[i].voted === 'Approved') {
            quest.proposals[quest.proposals.length-1].approved.push(this.state.playerVotes[i].name)
          } else {
            quest.proposals[quest.proposals.length-1].rejected.push(this.state.playerVotes[i].name)
          }
        }

        if (this.state.passed) {
          quest.adventurers = quest.proposals[quest.proposals.length-1].proposees
          this.props.updateQuest(quest)
          this.props.navigate({routeName: 'MissionScreen'})
        } else if (quest.failedVotes === 4){
          this.props.endGame(false)
          this.props.navigate({routeName: 'EndScreen'})
        } else {
          quest.failedVotes++
          quest.captainIndex = (quest.captainIndex + 1) % this.props.game.numPlayers
          this.props.updateQuest(quest)
          this.props.navigate({routeName: 'QuestScreen'})
        }
      }
    }

    resetVotes() {
      const playerVotes = _.cloneDeep(this.state.playerVotes)
      playerVotes.forEach((player) => {
        player.voted = 'None'
      })
      this.setState({playerVotes, voteCount: 0, voteComplete: false, error: false, passed: false})
    }

    render() {
      const playerRow = this.state.playerVotes.map((player, index) => {
        return (
          <View style={[styles.playerRow, index === this.state.playerVotes.length-1 ? {borderBottomWidth: 0} : null]}>
            <Text numberOfLines={1} style={styles.playerName}>{player.name}</Text>
            {this.state.voteComplete ? <Text style={styles.voteText}>{player.voted}</Text> : this.getVoteButtons(player)}
          </View>
        )
      })

      return (
        <Background title={"Voting"}>
          <View style={styles.container}>
            <Text style={styles.title}>{!this.state.voteComplete ? 'Voting Time!' : `Vote ${this.state.passed ? 'Passed' : 'Failed'}`}</Text>
            <View>
              {playerRow}
            </View>
            <SelectButton greenBackground disabled={this.state.error} onPress={()=> this.onContinue()}>
              Continue
            </SelectButton>
            {this.state.error ? <Text style={styles.error}>Make sure everyone voted!</Text> : null}
            {
              this.state.voteComplete ? (
                <View style={styles.restartContainer}>
                  <Text style={styles.restartText}>Did something go wrong?</Text>
                  <SelectButton onPress={() => this.resetVotes()}>
                    Reset
                  </SelectButton>
                </View>
              ) : null
            }
          </View>
        </Background>
      )
    }
}