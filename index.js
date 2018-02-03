import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';


export default class AvalonApp extends Component {
  render() {
    return (
      <View style={styles.main_container}>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Text style={styles.title}>Avalon Mobile</Text>

          <TouchableOpacity>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient_button}>
              <Text style={styles.buttonText}>
                Sign in with Facebook
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient> */}
      </View>
    );
  }
}
AppRegistry.registerComponent('AvalonMobile', () => AvalonApp);
