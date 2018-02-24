import React, { Component } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './SelectButtonStyle'
// Button component
export default class SelectButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={this.props.greenBackground ? styles.greenBackground : (this.props.isSelected ? styles.selectedButton : styles.unSelectedButton)}>
          <View style={ this.props.icon ? styles.sectionStyleNoIcon : styles.sectionStyleIcon}>
            <Text style={styles.textStyle}>{this.props.children}</Text>
            <Image source={this.props.icon} style={styles.buttonIcon}/>   
          </View>     
      </TouchableOpacity>
    );
  }
}