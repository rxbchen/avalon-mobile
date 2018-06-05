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
      <View style={styles.voteView}>
        <Text style={styles.playerText}>Pass or Fail?</Text>
        <SelectButton linearGradientStyle={styles.button} onPress={() => this.props.goToNext('Pass')}>
          Pass
        </SelectButton>
        <SelectButton linearGradientStyle={[styles.button, styles.bottomButton]} onPress={() => this.props.goToNext('Fail')}>
          Fail
        </SelectButton>
        <Text style={styles.footerText}>Pressing Fail as those who are fighting against Mordred will result in a pass</Text>
      </View>
    );
  }
}
