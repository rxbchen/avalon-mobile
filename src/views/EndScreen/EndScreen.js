import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './EndScreenStyle'
import Background from "src/components/Background"
import Card from "src/components/Card"
import SelectButton from "src/components/SelectButton"
import {reverseCamelCase} from "src/utils/stringUtils";
import GameOverView from './GameOverView'
import AssassinView from './AssassinView'


export default class EndScreen extends React.Component {
  static navigationOptions = {header: null}
  constructor(props) {
    super(props)
    this.state = {
      assassinTrigger: true,
      // goodWin comes from Game state
      goodWin: true
    }
  }

  renderScreen(assassinFlag, merlinFlag){
    if (this.state.assassinTrigger && assassinFlag && merlinFlag) {
      return <AssassinView toggleWinner={() => this.setState({goodWin: !this.state.goodWin})} toggleAssassin={() => this.setState({assassinTrigger: false})}/>
    } else {
      return <GameOverView goodWin={this.state.goodWin}/>
    }
  }

  render() {
    let assassinFlag = false
    let merlinFlag = false
    this.props.players.forEach((player) => {
      if (player.role === 'assassin'){
        assassinFlag = true
      }
      if (player.role === 'merlin'){
        merlinFlag = true
      }
    })
    return (
      <Background title={(this.state.assassinTrigger && assassinFlag && merlinFlag) ? "Assassin's Play" : 'Game Over'}>
        <View>
          {this.renderScreen(assassinFlag, merlinFlag)}
        </View>
      </Background>
    )
  }
}
