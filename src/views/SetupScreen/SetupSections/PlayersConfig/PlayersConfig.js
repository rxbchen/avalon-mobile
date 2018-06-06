import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './PlayersConfigStyle'
import LabelledInput from '../../../../components/LabelledInput'
import SelectButton from '../../../../components/SelectButton/SelectButton'
import Card from 'src/components/Card'

export default class PlayersConfig extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: [],
      isValid: true
    }
  }

  componentWillReceiveProps(nextProps){
    const newNames = []
    const numPlayers = nextProps.game.numPlayers
    for (let i = 0; i < numPlayers; i++){
      newNames.push("")
    }
    nextProps.players.forEach((playerObj, index) => {
      newNames[index] = playerObj.name
    })
    this.setState({names: newNames})
  }

  validatePlayerName(name, index){
    let isValid = true
    this.state.names.forEach((stateName, stateIndex) => {
      if ((name.toLowerCase() === stateName.toLowerCase() && index !== stateIndex) || !stateName) isValid = false
    })
    this.setState({isValid})
  }

  addPlayer(event, index) {
    const name = event.nativeEvent.text
    const newNames = this.state.names.slice(0)
    newNames[index] = name
    this.setState({names: newNames}, () => {
      this.validatePlayerName(name, index)
    })
  }

  saveAndContinue() {
    // check for any duplicate or empty names
    console.log('names')
    if (this.state.names.length !== _.uniq(this.state.names).length ||  _.compact(this.state.names).length < this.props.game.numPlayers) {
      this.setState({isValid: false})
    } else {
      this.props.createPlayers(this.state.names)
      this.props.displayAndOpen({displayButton: true}, {openPlayers: false})
    }
  }

  render() {
    let textInputs = [];
    for (let i = 0; i < this.props.game.numPlayers; i++) {
      textInputs.push(
        <LabelledInput key={i} value={this.state.names[i]} placeholder={"Player " + (i+1)} onChange={(event) => this.addPlayer(event, i)} style={styles.textInputs}/>
      )
    }
    return (
      <Card title='Player Configuration' collapsed={this.props.collapsed} style={this.props.style}>
        <Text style={styles.text}>Enter your player names:</Text>
        {textInputs}
        <SelectButton textStyle={styles.textButton} touchableOpacityStyle={styles.button} disabled={!this.state.isValid} onPress={() => this.saveAndContinue()} confirm>
          Save and Continue
        </SelectButton>
        {!this.state.isValid ? <Text style={styles.error}> Invalid names!</Text> : null}
      </Card>
    )
  }
}
