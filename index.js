import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import TasksList from './src/components/TasksList';

export default class AvalonApp extends Component { 
  render () { 
    return ( 
      <View style={styles.container}>
        <TasksList />
      </View> 
    ); 
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
AppRegistry.registerComponent('AvalonMobile', () => AvalonApp);
