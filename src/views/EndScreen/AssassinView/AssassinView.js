import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './AssassinViewStyle'
import SelectButton from 'src/components/SelectButton/SelectButton'
import _ from 'lodash'

export default class AssassinView extends Component {

  checkMerlin(player){
      if (player.role === 'merlin'){
        this.props.toggleWinner()
      }
      this.props.toggleAssassin()
  }

  render() {
    let playerList = [];
    let assassins = ""
    let firstAssassinFlag = true
    this.props.players.forEach((player) => {
      if (player.role === 'assassin'){
        if (firstAssassinFlag == true){
          assassins = assassins + player.name
          firstAssassinFlag = false
        }
        else{
          assassins = assassins + ", " + player.name

        }
      }
      if (_.includes(['merlin', 'percival', 'loyalServantOfArthur'], player.role)) {
        playerList.push(
          <SelectButton key={player.name} linearGradientStyle={styles.button}  textStyle={{fontSize: 20, lineHeight: 22}} onPress={() => this.checkMerlin(player)}>{player.name}</SelectButton>
        )
      }
    })

    return (
        <View>
          <View style={styles.textView}>
            <Text style={styles.title}>{assassins}</Text>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.circleImage} source={{uri: 'http://placehold.it/150x150'}}/>
          </View>
          <Text style={styles.subTitle}>Correctly assassinate Merlin</Text>
          <View style={styles.buttonContainer}>
            {playerList}
          </View>
        </View>
    );
  }
}

