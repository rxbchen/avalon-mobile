import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './GameConfigStyle'
import Card from 'src/components/Card'
import SelectButton from 'src/components/SelectButton/SelectButton'

import defaultGameSetups from 'src/static/DefaultGameSetups'

export default class GameConfig extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: -1
    }
  }

  isSelected(gameObj) {
    return gameObj === this.props.Game
  }

  onPressHandler(gameSetup, index) {
    this.setState({selected: index}, () => {
      this.props.createGame(gameSetup)
      this.props.displayAndOpen({displayRoles: true}, {openGame: false, openRoles: true})
    })
  }

  render() {
    return (
      <Card title='Game Configuration' collapsed={this.props.collapsed} style={this.props.style}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Select your game setup!</Text>
          {Object.keys(defaultGameSetups).map((key, index) => {
            return (
              <SelectButton key={defaultGameSetups[key].name + index}
                            linearGradientStyle={styles.button}
                            textStyle={{fontSize: 20}}
                            isSelected={this.state.selected === index}
                            onPress={() => this.onPressHandler(defaultGameSetups[key], index)}>
                {defaultGameSetups[key].name}
              </SelectButton>
            )})}
        </View>
      </Card>
    )
  }
}
