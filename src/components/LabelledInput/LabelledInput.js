import React from 'react';
import {View, TextInput, Image} from 'react-native';
import styles from './LabelledInputStyle'


/*
HOW TO IMPLEMENT:
Example:
 <LabelledInput value={this.state.name} placeholder="Only appears if no value"
   icon={require('../../img/test_icon .png')} onChangeText={ (text) => this.changeTextInputValue(text) }/>

Also required to implement the onChangeText function where you call LabelledInput

//OLD -FEB 28
  changeTextInputValue (text) {
    this.setState({
      name: text
    });
  }

*/
export default class LabelledInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <TextInput
            style={styles.input}
            onChange={(event) => this.props.onChange(event) }
            value={this.props.value}
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
          />
          <Image source={this.props.icon} style={styles.imageStyle} />
        </View>
      </View>
    );
  }
}
