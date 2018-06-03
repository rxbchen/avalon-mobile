import React, { Component } from 'react';
import { Text, View} from 'react-native'
import styles from './ResultsView'
import SelectButton from "src/components/SelectButton"

export default class ResultsView extends Component {
  constructor(props) {
    super(props)
  }

  MoveToNextScreen(){
    
  }

  render() {
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>{this.props.numFails}</Text>
        </View>
        <SelectButton linearGradient={styles.mainButton} onPress={this.MoveToNextScreen()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}
