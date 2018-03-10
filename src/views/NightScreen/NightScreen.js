import React from 'react'
import { View, Text } from 'react-native'
import styles from './NightScreenStyle'
import Background from "src/components/Background/Background"
import NameView from './NameView'
// import RoleView from './RoleView/RoleView'

export default class NightScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
      currentPlayer: this.props.players[0]
    }
    console.log(this.state.currentPlayer)
  }
  revealToggle(status) {
    this.setState({revealed: status})
  }

  render() {
    return (
      <Background>
        <View>
        <Text>{this.state.currentPlayer.role}</Text>
        { this.state.revealed ? <Text>HAI</Text> : 
          <NameView playerName = {this.state.currentPlayer}
          revealToggle={() => this.revealToggle(true)}/>
        }
          {/* <RolesView players={this.props.players} currentPlayer={this.state.currentPlayer}></RolesView> */}
        </View>
      </Background>
    )
  }
}
