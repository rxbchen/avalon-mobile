import React, { Component } from 'react';
import { Alert, Image, Text, View, TouchableOpacity } from 'react-native'
import styles from './SelectButtonStyle'
// Button component
export default class SelectButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isSelected: false }
  }
  // onPressButton() {
  //   this.setState( { isSelected: !this.state.isSelected })
  //   Alert.alert(this.state.isSelected)
  // }
  
  onPress = () => {
    this.setState({
      isSelected: !this.state.isSelected
    })
    Alert.alert(this.state.isSelected.toString())
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={this.props.isSelected ? styles.selectedButton : styles.unSelectedButton}>
          <View style={ this.props.icon ? styles.sectionStyleNoIcon : styles.sectionStyleIcon}>
            <Text style={styles.textStyle}>{this.props.children}</Text>
            <Image source={this.props.icon} style={styles.buttonIcon}/>   
          </View>     
      </TouchableOpacity>
    );
  }
}