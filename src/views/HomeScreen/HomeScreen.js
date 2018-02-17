import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './style'
import { NavigationActions } from "react-navigation"
import { connect } from "react-redux"
import navigate from '../../navigation/navigate'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title}>Avalon Mobile</Text>

                <TouchableOpacity style={styles.button} onPress={() =>
                    this.props.dispatch(NavigationActions.navigate({ routeName: 'SetupScreen' ,
                                                                     params: {gameObject:
                                                                    {name: 'test', numRounds: 3}}

                    }))}>

                    <Text>Play</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(HomeScreen);
// {() => navigate('Setup', { gameObject: {name: 'test', numRounds: 3} })}>
// {navigate('SetupScreen', { gameObject: {name: 'test', numRounds: 3} })}>