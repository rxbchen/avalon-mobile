import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CustomDropdown  from 'src/components/Dropdown'
import styles from './RoleConfigStyle'


export default class RoleConfig extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("role", this.props)

    var goodDropdownOptions = []
    var badDropdownOptions = []

    var goodPlayerTypes = [{value: 'loyal servant of Arthur'},
      {value: 'Merlin'},
      {value: 'Percival'}]
    var badPlayerTypes = [{value: 'minion of Mordred'},
      {value: 'Assassin'},
      {value: 'Morgana'},
      {value: 'Mordred'},
      {value: 'Oberon'}]

    for(let i = 0; i < this.props.game.numGood; i++){

      goodDropdownOptions.push(
        <View key = {i}>
          <CustomDropdown options={goodPlayerTypes} />
        </View>
      )
    }

    for(let i = 0; i < this.props.game.numBad; i++){

      badDropdownOptions.push(
        <View key = {i}>
          <CustomDropdown options={badPlayerTypes} />
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