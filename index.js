import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';


export default class AvalonApp extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Avalon Mobile</Text>
                
                <TouchableOpacity style={styles.button}>
                    <Text>PLAY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>MULTI-PHONE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>STATISTICS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>HELP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>SETTINGS</Text>
                </TouchableOpacity>

                // Within your render function
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>
                </LinearGradient>
            </View>
        );
    }
}

AppRegistry.registerComponent('AvalonMobile', () => AvalonApp);
