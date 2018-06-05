import React, { Component } from 'react'
import { Text, View } from 'react-native'
import proptypes from 'prop-types'
import SelectButton from 'src/components/SelectButton'
import styles from './PlayHistoryViewStyle'

export default class PlayHistoryView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.nameView}>
          <Text style={styles.caption}>
            Please pass the phone to
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.playerText}>
            {this.props.playerName.name}
          </Text>
        </View>
        <View style={styles.nameView}>
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
