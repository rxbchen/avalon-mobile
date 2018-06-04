import React from 'react'
import styles from './MissionScreenStyle'
import VoteView from './VoteView'
import NameView from './NameView'
import ResultsView from './ResultsView'

import Background from "src/components/Background/Background"

export default class MissionScreen extends React.Component {
  static navigationOptions = {header: null}
  constructor(props) {
    super(props)
    let currMission = -1
    for(let i = 0; i < this.props.quest.length; i++){
      if(this.props.quest[i].status === "active"){
        currMission = i
      }
    }
    this.state = {
      index: 0,
      revealed: false,
      currentPlayer: this.props.quest[currMission].adventurers[0],
      finalCheck: false,
      numFailVotes: 0,
      currentMission: currMission
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  goToNext(vote) {
    if(vote === 'Fail'){
      for(let i = 0; i < this.props.game.numPlayers; i++) {
        if(this.props.players[i].name === this.props.quest[this.state.currentMission].adventurers[this.state.index]){
          switch(this.props.players[i].role)
          {
            case 'morgana':
            case 'mordred':
            case 'assassin':
            case 'minionOfMordred':
            case 'oberon':
              this.setState({
                numFailVotes: this.state.numFailVotes + 1
              })
          }
        }
      }
    }
    if ( this.state.index < this.props.quest[this.state.currentMission].numAdventurers - 1) {
      this.setState({
        finalCheck: false,
        index: this.state.index + 1,
        currentPlayer: this.props.quest[this.state.currentMission].adventurers[this.state.index + 1],
      })
    }
    else {
      this.setState({ finalCheck: true })
    }
    this.toggleReveal()
  }


  renderScreen(){
    if (this.state.finalCheck) {
      return <ResultsView numFails={this.state.numFailVotes} currentMission={this.state.currentMission}/>
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
      <Background isScrollEnabled={false} title={'Mission'}>
        {this.renderScreen()}
      </Background>
    )
  }
}
