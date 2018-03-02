import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './RoleConfigStyle'


export default class RoleConfig extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("role", this.props)

    var goodDropdownOptions = []
    var badDropdownOptions = []

    for(let i = 0; i < this.props.game.numGood; i++){

      goodDropdownOptions.push(
        <View key = {i}>
          <Text> good player </Text>
        </View>
      )
    }

    for(let i = 0; i < this.props.game.numBad; i++){

      badDropdownOptions.push(
        <View key = {i}>
          <Text> bad player </Text>
        </View>
      )
    }
    return (
      <View>
        {goodDropdownOptions}
        {badDropdownOptions}
      </View>

    )
  }

}