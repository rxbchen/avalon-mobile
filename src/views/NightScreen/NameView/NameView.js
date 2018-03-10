import React, { Component } from 'react'
import { Text, View } from 'react-native'
import proptypes from 'prop-types'
import SelectButton from 'src/components/SelectButton'

export default class NameView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>{this.props.playerName.name}</Text>
        <SelectButton onPress={() => this.props.revealToggle()}>
          Show Me My Role
        </SelectButton>
      </View>
    )
  }
}

NameView.proptypes = {
  changeReveal: proptypes.any,
  playerName: proptypes.string
}
