import React from 'react'
import { View, Text } from 'react-native'
import styles from './NightScreenStyle'
import RolesView from './RolesView'

import Background from "src/components/Background/Background"
import NameView from './NameView'
import ConfirmView from "./ConfirmView";

export default class NightScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      revealed: false,
      currentPlayer: this.props.players[0],
      finalCheck: false
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  goToNext() {
    if ( this.state.index < this.props.players.length ) {
      this.setState({
        finalCheck: false,
        index: this.state.index + 1,
        currentPlayer: this.props.players[this.state.index],
      })
    }
    else {
      this.setState({ finalCheck: true })
    }
    console.log("In go to next: " + this.state.index)
    this.toggleReveal()
  }


  renderScreen(){
    console.log("Revealed: " + this.state.revealed + ", Final: " + this.state.revealed + ", currentPlayer: " + this.state.index)

    if (this.state.finalCheck) {
      return <ConfirmView returnToSetup={()=> this.props.navigate({routeName: 'SetupScreen'})}
                          finalCheckReturned={(player)=> this.setState({finalCheck: false, currentPlayer: player})}
                          players={this.props.players}/>
    }
    else if (this.state.revealed) {
      return <RolesView goToNext={ () => this.goToNext() } players={this.props.players} currentPlayer={this.state.currentPlayer}/>;
    }
    else{
      return <NameView playerName={this.state.currentPlayer} toggleReveal={() => this.toggleReveal()} />
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
