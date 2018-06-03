import React, { Component } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './SelectButtonStyle'
import LinearGradient from 'react-native-linear-gradient';
import GLOBALS from 'src/globals'
export default class SelectButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <LinearGradient colors={this.props.greenBackground ? GLOBALS.COLOR.GREEN_GRADIENT : GLOBALS.COLOR.RED_GRADIENT}
                      style={[styles.linearGradient, this.props.linearGradient ? this.props.linearGradient : null]}>
        <TouchableOpacity onPress={() => this.props.onPress()}
          style={this.props.isSelected ? styles.selectedButton : styles.unSelectedButton}
          disabled={ this.props.disabled }>
            <View style={ this.props.icon ? styles.sectionStyleIcon : styles.sectionStyleNoIcon}>
              <Text style={[styles.textStyle, this.props.textStyle ? this.props.textStyle : null]}>{this.props.children}</Text>
              {this.props.icon ? <Image source={this.props.icon} style={styles.buttonIcon}/> : null }
            </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}