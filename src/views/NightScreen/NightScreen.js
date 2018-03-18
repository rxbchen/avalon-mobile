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
      finalCheck: true
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  finalCheckReturned(currentPlayer){
    this.setState({finalCheck: false, currentPlayer: currentPlayer})
  }

  renderScreen(){
    if (this.state.finalCheck){
      return <ConfirmView finalCheckReturned={(player)=> this.finalCheckReturned(player)} players={this.props.players}/>;
    }
    else if (this.state.revealed){
      return <RolesView toggleReveal={()=> this.toggleReveal()} players={this.props.players} currentPlayer={this.state.currentPlayer}/>;
    }
    else{
      return <Text>Should be brians stuff here</Text>
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
