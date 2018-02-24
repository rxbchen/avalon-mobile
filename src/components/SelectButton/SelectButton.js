import React, { Component } from 'react';
import { Alert, Text, View, TouchableOpacity } from 'react-native'
import styles from './SelectButtonStyle'
// Button component
class SelectButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isSelected: false }
  }
  _onPressButton() {
    this.setState( { isSelected: !this.state.isSelected })
    Alert.alert('Hai')
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this._onPressButton()} style={this.props.isSelected ? styles.selectedButton : styles.unSelectedButton}>
        <Text style={styles.textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default SelectButton;