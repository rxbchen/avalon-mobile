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
      <View>
        <View style={styles.container}>
          <Text style={styles.caption}>
            Please pass the phone to
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.playerText}>
            {this.props.playerName.name}
          </Text>
        </View>
        <View style={styles.container}>
          <SelectButton 
            onPress={() => this.props.toggleReveal()}
            greenBackground={true}
            linearGradient={styles.button}>
            That's Me
          </SelectButton>
        </View>
      </View>
    )
  }
}

NameView.proptypes = {
  changeReveal: proptypes.any,
  playerName: proptypes.string
}
