import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './GameOverViewStyle'
import Card from "src/components/Card"
import SelectButton from "src/components/SelectButton"
import {reverseCamelCase} from "src/utils/stringUtils";

export default class GameOverView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerList : [],
    }
  }

  insertPlayerList(text) {
    this.setState(function(currentState) {
      return { playerList: currentState.playerList.concat(text)};
    });
  }
  addPlayer(player) {
    this.setState(function(currentState) {
      return { playerList: currentState.playerList.concat(reverseCamelCase(player.role) + " : " + player.name)};
    });
  }

  findPlayers(roles){
    roles.forEach((role) =>{
      this.props.players.forEach((player) => {
        if (player.role === role) {
          this.addPlayer(player)
        }
      })
    })
  }

  generatePlayerList(){
    var roles = []
    // Generates the correct order to display
    // Insert header, winning roles, clears, second header, losing roles
    if (this.props.goodWin){
      this.insertPlayerList("Good Team:")
      roles.push('merlin', 'percival', 'loyalServantOfArthur')
      this.findPlayers(roles)
      roles.length = 0
      this.insertPlayerList("\nEvil Team:")
      roles.push('mordred','morgana','assassin','oberon','minionOfMordred')
    }
    else{
      this.insertPlayerList("Evil Team:")
      roles.push('mordred','morgana','assassin','oberon','minionOfMordred')
      this.findPlayers(roles)
      roles.length = 0
      this.insertPlayerList("\nGood Team:")
      roles.push('merlin', 'percival', 'loyalServantOfArthur')
    }
    this.findPlayers(roles)
  }

  winningIcon(){
    return this.props.goodWin ? require('src/static/images/icons/merlin.png') : require('src/static/images/icons/mordred.png')
  }

  componentDidMount(){
    this.generatePlayerList()
  }

  render() {
    const winner = this.props.goodWin ? "Good" : "Evil"
    return (
        <View style={styles.container}>
          <View style={styles.textView}>
            <Text style={styles.winnerText}>{winner} Team Wins</Text>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.circleImage} source={this.winningIcon()}/>
          </View>
          <Card title='Player Roles' locked collapsed={false}
                style={{alignSelf: 'stretch', marginBottom: 15}}
                collapsibleContainer={styles.cardCollapsibleContainer}
                titleText={{fontSize: 20}}
                titleContainer={styles.cardTitleContainer}>
              {this.state.playerList.map((name, key)=>(
                <Text key={key}> { name } </Text>)
              )}
          </Card>
            <SelectButton confirm textStyle={{fontSize: 20}}
                          linearGradientStyle={styles.returnButton}
                          touchableOpacityStyle={{width: '100%'}}
                          onPress={() => this.props.navigate({routeName: 'SetupScreen'})}>
              Play Again
            </SelectButton>
            <SelectButton textStyle={{fontSize: 20}} linearGradientStyle={styles.returnButton} onPress={() => this.props.navigate({routeName: 'HomeScreen'})}>
              Home
            </SelectButton>
        </View>
    )
  }
}
