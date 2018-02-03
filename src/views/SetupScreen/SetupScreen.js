import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';

export default class SetupScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Setup {params.gameObject.name} and {params.gameObject.numRounds}</Text>

                <TouchableOpacity>
                    <Text>Play</Text>
                </TouchableOpacity>

            </View>
        );
    }
}