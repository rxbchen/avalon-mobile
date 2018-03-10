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
  toggleReveal() {
    this.setState({revealed: !this.state.revealed})
  }

  render() {
    return (
      <Background>
        <View>
        { this.state.revealed ? <Text>HAI</Text> : 
          <NameView playerName = {this.state.currentPlayer}
          revealToggle={() => this.toggleReveal()}/>
        }
          {/* <RolesView players={this.props.players} currentPlayer={this.state.currentPlayer}></RolesView> */}
        </View>
      </Background>
    )
  }
}
