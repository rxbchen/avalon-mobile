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
        <View style={styles.voteView}>
          <Text style={styles.playerText}>Pass or Fail?</Text>
          <SelectButton linearGradient={styles.button} onPress={() => this.props.goToNext('Pass')}>
            Pass
          </SelectButton>
          <SelectButton linearGradient={styles.bottomButton} onPress={() => this.props.goToNext('Fail')}>
            Fail
          </SelectButton>
        </View>
        <Text style={styles.footerText}>Pressing Fail as those who are fighting against Mordred will result in a pass</Text>
      </View>
    );
  }
}
