import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'

export default class AvalonApp extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Avalon Mobile</Text>
                
                <TouchableOpacity style={styles.button}>
                    <Text>Play</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

AppRegistry.registerComponent('AvalonMobile', () => AvalonApp);
