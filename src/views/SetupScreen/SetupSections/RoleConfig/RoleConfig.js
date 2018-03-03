import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CustomDropdown  from 'src/components/Dropdown'
import styles from './RoleConfigStyle'
import Card from 'src/components/Card'
import SelectButton from "../../../../components/SelectButton/SelectButton";
import defaultGameSetups from "../../../../static/DefaultGameSetups";
import _ from 'lodash'
import {reverseCamelCase} from "../../../../utils/stringUtils";

export default class RoleConfig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolesGood: [],
      rolesBad: [],
    }

  }

  componentWillReceiveProps(nextProps) {
    const game = nextProps.game
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

    this.setState({rolesGood, rolesBad})
  }

  selectRoleName(displayName, index,  team) {
    const newRoles = _.cloneDeep(this.state[`roles${team}`])
    newRoles[index].display = displayName
    newRoles[index].value = _.camelCase(displayName)
    this.setState({ [`roles${team}`]: newRoles})
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
      <View>
        <Card title={'Role Configuration'} isCollapsed={false}>
          <View>
          {goodDropdownOptions}
          {badDropdownOptions}
            <SelectButton onPress={() => this.props.updateRoles(this.state)}/>
          </View>
        </Card>
      </View>

    )
  }

}