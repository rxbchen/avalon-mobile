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
      revealedText: ""
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
          <Image style={styles.circleImage} source={{uri: 'http://placehold.it/150x150'}}/>
        </View>
        <Card title='What you know' isCollapsed={false}>
          <View>
            <Text>{this.state.revealedText}</Text>
            {this.state.knownPlayers.map((name, key)=>(
              <Text key={key}> { name } </Text>)
            )}
          </View>
        </Card>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.toggleReveal()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}
