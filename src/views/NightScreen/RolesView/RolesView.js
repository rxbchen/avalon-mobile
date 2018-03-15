import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import styles from './RolesViewStyle'
import Card from "src/components/Card"
import SelectButton from "src/components/SelectButton"
import {reverseCamelCase} from "src/utils/stringUtils";

export default class RolesView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      revealedText: ""
    }
  }

  initializeText(text) {
    this.setState(function() {
      return { revealedText: text};
    });
  }

  addPlayer(player) {
    this.setState(function(currentState) {
      return { revealedText: currentState.revealedText + " " + player.name + "\n"};
    });
  }

  updateRevealedText(){
    var knownPlayers = []

    switch (this.props.currentPlayer.role){
      case 'morgana':
      case 'mordred':
      case 'assasin':
      case 'minionOfMordred':
        knownPlayers.push('minionOfMordred', 'assasin', 'morgana', 'mordred', 'oberon')
        return(
          this.initializeText("Fellow Minions of Mordred:\n"),
          this.props.players.forEach((player) => {
            if (knownPlayers.indexOf(player.role) !== -1 && player.name !== this.props.currentPlayer.name){
              this.addPlayer(player)
            }
          })
        );
      case 'oberon':
      case 'loyalServantOfArthur':
        return(
          this.initializeText("You know nothing"),
          this.props.players.forEach((player) => {
            if (knownPlayers.indexOf(player.role) !== -1 && player.name !== this.props.currentPlayer.name){
              this.addPlayer(player)
            }
          })
        );
      case 'merlin':
        knownPlayers.push('minionOfMordred', 'assasin', 'morgana', 'oberon')
        return(
          this.initializeText("All evil are revealed to you, except for Mordred:\n"),
            this.props.players.forEach((player) => {
              if (knownPlayers.indexOf(player.role) !== -1 && player.name !== this.props.currentPlayer.name){
                this.addPlayer(player)
              }
            })
        );
      case 'percival':
        knownPlayers.push('merlin', 'morgana')
        return(
          this.initializeText("The following players are either Merlin or Morgana:\n"),
            this.props.players.forEach((player) => {
              if (knownPlayers.indexOf(player.role) !== -1 && player.name !== this.props.currentPlayer.name){
                this.addPlayer(player)
              }
            })
        );
    }
  }

  componentDidMount(){
    this.updateRevealedText()
  }

  render() {
    console.log("CURRENT PLAYER: ", this.props.currentPlayer)
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>You are...</Text>
          <Text style={styles.roleText}>{reverseCamelCase(this.props.currentPlayer.role)}</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.circleImage} source={{uri: 'http://placehold.it/150x150'}}/>
        </View>
        <Card title='What you know' isCollapsed={false}>
          <View>
            <Text>{this.state.revealedText}</Text>
          </View>
        </Card>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.toggleReveal()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}