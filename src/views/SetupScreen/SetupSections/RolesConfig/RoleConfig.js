import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CustomDropdown  from 'src/components/Dropdown'
import Card from 'src/components/Card'
import SelectButton from "src/components/SelectButton/SelectButton";
import defaultGameSetups from "../../../../static/DefaultGameSetups";
import _ from 'lodash'
import {reverseCamelCase} from "src/utils/stringUtils";

export default class RoleConfig extends Component {
  constructor(props) {
    super(props)
    if (!_.isEmpty(this.props.game)) {
      this.state = this.initializeRoles(this.props.game)
    } else {
      this.state = {
        rolesGood: [],
        rolesBad: [],
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.initializeRoles(nextProps.game))
  }

  initializeRoles(game) {
    const rolesGood = []
    const rolesBad = []
    for( let role in game.rolesGood) {
      for( let j = 0; j < game.rolesGood[role]; j++){
        rolesGood.push({value: role, display: reverseCamelCase(role)})
      }
    }
    for( let role in game.rolesBad) {
      for( let j = 0; j < game.rolesBad[role]; j++){
        rolesBad.push({value: role, display: reverseCamelCase(role)})
      }
    }
    return {rolesGood, rolesBad}
  }

  selectRoleName(displayName, index,  team) {
    const newRoles = _.cloneDeep(this.state[`roles${team}`])
    newRoles[index].display = displayName
    newRoles[index].value = _.camelCase(displayName)
    this.setState({ [`roles${team}`]: newRoles})
  }

  saveAndContinue(state){
    this.props.updateRoles(state)
    this.props.displayAndOpen({displayPlayers: true}, {openPlayers: true, openRoles: false})
  }

  render() {
    let goodDropdownOptions = []
    let badDropdownOptions = []

    let goodPlayerTypes = [{value: 'Loyal Servant of Arthur'},
      {value: 'Merlin'},
      {value: 'Percival'}]
    let badPlayerTypes = [{value: 'Minion of Mordred'},
      {value: 'Assassin'},
      {value: 'Morgana'},
      {value: 'Mordred'},
      {value: 'Oberon'}]

    let gameObject = Object.assign({}, this.props.game)
    let currentGoodRoles = []

    for(let i = 0; i < gameObject.numGood; i++){

      goodDropdownOptions.push(
        <View  key = {i} >
          <CustomDropdown options={goodPlayerTypes} value={this.state.rolesGood[i].display} onChange={(value) => this.selectRoleName(value, i, "Good")} />
        </View>
      )
    }

    for(let i = 0; i < gameObject.numBad; i++){

      badDropdownOptions.push(
        <View key = {i}>
          <CustomDropdown options={badPlayerTypes} value={this.state.rolesBad[i].display} onChange={(value) => this.selectRoleName(value, i, "Bad")} />
        </View>
      )
    }
    return (
      <Card title='Role Configuration' collapsed={this.props.collapsed} style={this.props.style}>
          {goodDropdownOptions}
          {badDropdownOptions}
          <SelectButton textStyle={{fontSize: 20}} onPress={() => this.saveAndContinue(this.state)} confirm>
            Save and Continue
          </SelectButton>
      </Card>
    )
  }
}