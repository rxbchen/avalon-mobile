import React from 'react'
import { View, Text } from 'react-native'
import styles from './NightScreenStyle'
import RolesView from './RolesView'

import Background from "src/components/Background/Background"
import ConfirmView from "./ConfirmView/ConfirmView";


export default class SetupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
      currentPlayer: this.props.players[0],
      finalCheck: false
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  finalCheckReturned(currentPlayer){
    console.log("Current Player: ", currentPlayer)
    this.setState({finalCheck: false, currentPlayer: currentPlayer})
  }
  //<RolesView toggleReveal={()=> this.revealToggle()} players={this.props.players} currentPlayer={this.state.currentPlayer}></RolesView>
  render() {
    return (
      <Background>
        <View>
          <ConfirmView finalCheckReturned={()=> this.finalCheckReturned()} players={this.props.players}></ConfirmView>
        </View>
      </Background>
    )
  }
}
