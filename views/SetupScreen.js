import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'

export default class SetupScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Setup {params.gameObject.name} and {params.gameObject.numRounds}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text>Play</Text>
                </TouchableOpacity>

            </View>
        );
    }
}