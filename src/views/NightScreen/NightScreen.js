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
      revealed: false,
      currentPlayer: this.props.players[0],
      finalCheck: true
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  goToFinal() {
    this.setState({revealed: !this.state.revealed})
    this.setState({finalCheck: true})
  }


  renderScreen(){
    console.log("Revealed: " + this.state.revealed + ", Final: " + this.state.revealed)

    if (this.state.finalCheck) {
      return <ConfirmView returnToSetup={()=> this.props.navigate({routeName: 'SetupScreen'})}
                          finalCheckReturned={(player)=> this.setState({finalCheck: false, currentPlayer: player})}
                          players={this.props.players}/>
    }
    else if (this.state.revealed) {
      return <RolesView goToFinal={()=> this.goToFinal()} goToFinal={ () => this.goToFinal() } players={this.props.players} currentPlayer={this.state.currentPlayer}/>;
    }
    else{
      return <NameView playerName = {this.state.currentPlayer} toggleReveal={() => this.toggleReveal()} />
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
