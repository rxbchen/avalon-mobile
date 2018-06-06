import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CustomDropdown  from 'src/components/Dropdown'
import Card from 'src/components/Card'
import SelectButton from "src/components/SelectButton/SelectButton"
import _ from 'lodash'
import {reverseCamelCase} from "src/utils/stringUtils"
import styles from './RoleConfigStyle'

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
        <CustomDropdown key = {i} options={goodPlayerTypes} value={this.state.rolesGood[i].display} onChange={(value) => this.selectRoleName(value, i, "Good")} />
      )
    }

    for(let i = 0; i < gameObject.numBad; i++){

      badDropdownOptions.push(
        <CustomDropdown key = {i} options={badPlayerTypes} value={this.state.rolesBad[i].display} onChange={(value) => this.selectRoleName(value, i, "Bad")} />
      )
    }
    return (
      <Card title='Role Configuration' collapsed={this.props.collapsed} style={this.props.style}>
        <View>
          <Text style={styles.text}>Please select your roles!</Text>
          <Text style={styles.text}>Good:</Text>
          {goodDropdownOptions}
          <Text style={styles.evilText}>Evil:</Text>
          {badDropdownOptions}
          <SelectButton textStyle={styles.textButton} onPress={() => this.saveAndContinue(this.state)} confirm>
            Save and Continue
          </SelectButton>
        </View>
      </Card>
    )
  }
}