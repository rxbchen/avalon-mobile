import React from 'react'
import { View, Text } from 'react-native'
import styles from './NightScreenStyle'
import RolesView from './RolesView'

import Background from "src/components/Background/Background"


export default class SetupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
      currentPlayer: this.props.players[0]
    }
  }
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }
  render() {
    return (
      <Background>
        <View>
          <RolesView toggleReveal={()=> this.revealToggle()} players={this.props.players} currentPlayer={this.state.currentPlayer}></RolesView>
        </View>
      </Background>
    )
  }
}
