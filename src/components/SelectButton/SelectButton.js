import React, { Component } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './SelectButtonStyle'
import LinearGradient from 'react-native-linear-gradient';
// Button component
export default class SelectButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LinearGradient colors={this.props.greenBackground ? ['#56bf00', '#57ab16'] : ['#762323', '#5d1414']}
                      style={this.props.linearGradient ? this.props.linearGradient : styles.linearGradient}>
        <TouchableOpacity onPress={() => this.props.onPress()}
          style={this.props.isSelected ? styles.selectedButton : styles.unSelectedButton}
          disabled={ this.props.disabled }>
            <View style={ this.props.icon ? styles.sectionStyleIcon : styles.sectionStyleNoIcon}>
              <Text style={styles.textStyle}>{this.props.children}</Text>
              <Image source={this.props.icon} style={styles.buttonIcon}/>
            </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}