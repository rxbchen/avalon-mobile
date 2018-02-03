import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'

export default class HomeScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Avalon Mobile</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigate('Setup', { gameObject: {name: 'test', numRounds: 3} })}>
                    <Text>Play</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

