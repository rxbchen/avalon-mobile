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
        <TouchableOpacity onPress={() => this.props.onPress()}
                          disabled={ this.props.disabled }
                          style={[this.props.confirm ? {width: '80%', alignSelf: 'center'} : null, this.props.touchableOpacityStyle ? this.props.touchableOpacityStyle : null]}>
          <LinearGradient colors={this.props.disabled ? GLOBALS.COLOR.DISABLED : this.props.confirm ? GLOBALS.COLOR.GREEN_GRADIENT : this.props.isSelected ? GLOBALS.COLOR.LIGHT_RED_GRADIENT : GLOBALS.COLOR.RED_GRADIENT}
                        style={[styles.linearGradientStyle, this.props.confirm  ? styles.confirmButton : null, this.props.linearGradientStyle ? this.props.linearGradientStyle : null]}>
              <View style={[styles.viewStyle, this.props.icon ? styles.sectionStyleIcon : null]}>
                <Text numberOfLines={2} style={[styles.textStyle, this.props.textStyle ? this.props.textStyle : null]}>{this.props.children}</Text>
                {this.props.icon ? <Image source={this.props.icon} style={styles.buttonIcon}/> : null }
              </View>
          </LinearGradient>
        </TouchableOpacity>
    );
  }
}