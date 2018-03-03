import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CustomDropdown  from 'src/components/Dropdown'
import styles from './RoleConfigStyle'
import Card from 'src/components/Card'
import SelectButton from "../../../../components/SelectButton/SelectButton";

export default class RoleConfig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rolesGood: [],
      rolesBad: [],
    }

  }

  componentWillReceiveProps(nextProps) {
    console.log('called', nextProps.game)
    const rolesGood = []
    const rolesBad = []
    for(let i = 0; i < nextProps.game.numBad; i++)
    {
      rolesBad.push('Minion of Mordred')
    }
    for(let i = 0; i < nextProps.game.numGood; i++)
    {
      rolesGood.push('Loyal Servant of Arthur')
    }

    this.setState({rolesGood, rolesBad})
  }

  selectRoleName(value, index,  team) {
    const newRoles = this.state[`roles${team}`].slice(0)
    newRoles[index] = value
    this.setState({ [`roles${team}`]: newRoles})
  }


  render() {
    console.log("role", this.props)

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
    // gameObject.rolesGood.merlin = 0
    // gameObject.rolesGood.loyalServant = 0
    // gameObject.rolesGood.percival = 0
    // gameObject.rolesBad.minionMordred = 0
    // gameObject.rolesBad.assassin = 0
    // gameObject.rolesBad.morgana = 0
    // gameObject.rolesBad.mordred = 0
    // gameObject.rolesBad.oberon = 0

    let currentGoodRoles = []


    for(let i = 0; i < gameObject.numGood; i++){

      goodDropdownOptions.push(
        <View  key = {i} >
          <CustomDropdown options={goodPlayerTypes} value={this.state.rolesGood[i]} onChange={(value) => this.selectRoleName(value, i, "Good")} />
        </View>
      )
    }

    for(let i = 0; i < gameObject.numBad; i++){

      badDropdownOptions.push(
        <View key = {i}>
          <CustomDropdown options={badPlayerTypes} value={this.state.rolesBad[i]} onChange={(value) => this.selectRoleName(value, i, "Bad")} />
        </View>
      )
    }
    return (
      <View>
        <Card title={'Role Configuration'} isCollapsed={false}>
          <View>
          {goodDropdownOptions}
          {badDropdownOptions}
          </View>
          <SelectButton onPress={() => this.updateRoles()}/>
        </Card>
      </View>

    )
  }

}