import React, { Component } from 'react'
import { Text, View } from 'react-native'
import proptypes from 'prop-types'
import SelectButton from 'src/components/SelectButton'
import styles from './NameViewStyle'

export default class NameView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.nameView}>
          <Text style={styles.caption}>
            Please pass the phone to
          </Text>
          <Text numberOfLines={2} style={styles.playerText}>
            {this.props.playerName.name}
          </Text>
          <SelectButton 
            onPress={() => this.props.toggleReveal()}
            confirm
            linearGradientStyle={styles.button}>
            That's Me
          </SelectButton>
      </View>
    )
  }
}

NameView.proptypes = {
  changeReveal: proptypes.any,
  playerName: proptypes.string
}
