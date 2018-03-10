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
      <View>
        <Text style={styles.caption}>
          Please pass the phone to
        </Text>
      </View>
      <View>
        <Text style={styles.playerText}>
          {this.props.playerName.name}
        </Text>
      </View>
      <View>
        <SelectButton 
          onPress={() => this.props.toggleReveal()}
          greenBackground={true}>
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
