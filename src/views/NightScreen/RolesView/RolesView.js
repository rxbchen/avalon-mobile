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
      knownPlayers: [],
      revealedText: "",
      icon: ""
    }
  }

  addPlayer(player) {
    this.setState(function(currentState) {
      return { knownPlayers: currentState.knownPlayers.concat(player.name)};
    });
  }

  findPlayers(roles){
    this.props.players.forEach((player) => {
      if (roles.indexOf(player.role) !== -1 && player.name !== this.props.currentPlayer.name){
        this.addPlayer(player)
      }
    })
  }

  updateRevealedText(){
    var knownPlayers = []

    switch (this.props.currentPlayer.role){
      case 'morgana':
      case 'mordred':
      case 'assassin':
      case 'minionOfMordred':
        knownPlayers.push('minionOfMordred', 'assassin', 'morgana', 'mordred', 'oberon')
        return(
          this.setState({revealedText: "Fellow Minions of Mordred:\n"}),
          this.findPlayers(knownPlayers)
        );
      case 'oberon':
      case 'loyalServantOfArthur':
        return(
          this.setState({revealedText: "You know nothing"})
        );
      case 'merlin':
        knownPlayers.push('minionOfMordred', 'assassin', 'morgana', 'oberon')
        return(
          this.setState({revealedText: "All evil are revealed to you, except for Mordred:\n"}),
          this.findPlayers(knownPlayers)
        );
      case 'percival':
        knownPlayers.push('merlin', 'morgana')
        return(
          this.setState({revealedText: "The following players are either Merlin or Morgana:\n"}),
          this.findPlayers(knownPlayers)
        );
    }
  }

  setIcon(){
    switch (this.props.currentPlayer.role){
      case 'morgana':
        return require('src/static/images/icons/morgana.png')
      case 'mordred':
        return require('src/static/images/icons/mordred.png')
      case 'assassin':
        return require('src/static/images/icons/assassin.png')
      case 'minionOfMordred':
        return require('src/static/images/icons/minionOfMordred.png')
      case 'oberon':
        return require('src/static/images/icons/oberon.png')
      case 'loyalServantOfArthur':
        return require('src/static/images/icons/loyalServantOfArthur.png')
      case 'merlin':
        return require('src/static/images/icons/merlin.png')
      case 'percival':
        return require('src/static/images/icons/percival.png')
    }
  }

  componentDidMount(){
    this.updateRevealedText()
  }

  render() {
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>You are...</Text>
          <Text style={styles.roleText}>{reverseCamelCase(this.props.currentPlayer.role)}</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.circleImage} source={this.setIcon()}/>
        </View>
        <Card title='What you know' isCollapsed={false}>
          <View>
            <Text>{this.state.revealedText}</Text>
            {this.state.knownPlayers.map((name, key)=>(
              <Text key={key}> { name } </Text>)
            )}
          </View>
        </Card>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.goToNext()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}
