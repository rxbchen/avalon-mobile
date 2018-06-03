import React, { Component } from 'react';
import { Text, View} from 'react-native'
import styles from './VoteViewStyle'
import SelectButton from "src/components/SelectButton"

export default class VoteView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>Pressing Fail as those who are fighting against Mordred will result in a pass</Text>
        </View>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.goToNext('Pass')}>
          Pass
        </SelectButton>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.props.goToNext('Fail')}>
          Fail
        </SelectButton>
      </View>
    );
  }
}
