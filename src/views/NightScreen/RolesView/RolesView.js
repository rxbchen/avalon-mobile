import React, { Component } from 'react';
import { Text, View, Image } from 'react-native'
import styles from './RolesViewStyle'
import Card from "src/components/Card"
import SelectButton from "src/components/SelectButton"

export default class RolesView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("CURRENT PLAYER: ", this.props.currentPlayer)
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>You are...</Text>
          <Text style={styles.roleText}>{this.props.currentPlayer.role}</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.circleImage} source={{uri: 'http://placehold.it/150x150'}}/>
        </View>
        <Card title='What you know' isCollapsed={false}>
          <View>
            <Text>Nothing l m a o</Text>
          </View>
        </Card>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.toggleReveal()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}