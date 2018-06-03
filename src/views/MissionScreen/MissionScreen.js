import React from 'react'
import { View } from 'react-native'
import styles from './MissionScreenStyle'
import VoteView from './VoteView'
import NameView from './NameView'
import ResultsView from './ResultsView'

import Background from "src/components/Background/Background"

export default class MissionScreen extends React.Component {
  constructor(props) {
    super(props)
    console.log("props", this.props)
    this.state = {
      index: 0,
      revealed: false,
      currentPlayer: this.props.quest[0].adventurers[0],
      finalCheck: false,
      numFailVotes: 0,
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  goToNext(vote) {
    if(vote == 'Fail'){
      for(let i = 0; i < this.props.game.numPlayers; i++) {
        if(this.props.players[i] === this.props.quest[0].adventurers[this.state.index]){
          switch(this.props.players[i].role)
          {
            case 'morgana':
            case 'mordred':
            case 'assassin':
            case 'minionOfMordred':
            case 'oberon':
              this.setState({
                numFailedVotes: this.state.numFailVotes + 1
              })
          }
        }
      }
    }
    if ( this.state.index < this.props.quest[0].numAdventurers - 1) {
      this.setState({
        finalCheck: false,
        index: this.state.index + 1,
        currentPlayer: this.props.quest[0].adventurers[this.state.index + 1],
      })
    }
    else {
      this.setState({ finalCheck: true })
    }
    this.toggleReveal()
  }


  renderScreen(){
    if (this.state.finalCheck) {
      return <ResultsView numFails={this.state.numFailVotes}/>
    }
    else if (this.state.revealed) {
      return <VoteView goToNext={ (vote) => this.goToNext(vote) } players={this.props.players} currentPlayer={this.state.currentPlayer}/>;
    }
    else{
      return <NameView playerName={this.state.currentPlayer} toggleReveal={() => this.toggleReveal()}/>
    }
  }

  render() {
    return (
      <Background>
        <View>
          {this.renderScreen()}
        </View>
      </Background>
    )
  }
}
