import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './SetupScreenStyle'
import { randomizeRoles } from "src/utils/helpers"
import Background from "src/components/Background/Background"
import SelectButton from "src/components/SelectButton"

import GameConfig from './SetupSections/GameConfig'
import RolesConfig from './SetupSections/RolesConfig'
import PlayersConfig from './SetupSections/PlayersConfig'


export default class SetupScreen extends Component {
  static navigationOptions = {header: null}
  handleContinue() {
    const roles = randomizeRoles(this.props.game)
    this.props.assignRoles(roles)
    this.props.navigate({routeName: 'NightScreen'})
  }

  render() {
    return (
        <Container>
          <Header style={styles.headerStyle}>
            <Body>
            <Title style={styles.headerFont}>Game Set-Up</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigate({routeName: 'HomeScreen'})}>
                <Text>Home</Text>
              </Button>
            </Right>
          </Header>
          <Background>
            <GameConfig/>
            <RolesConfig/>
            {this.props.game !== undefined ? <PlayersConfig/> : null}
            <SelectButton greenBackground onPress={() => this.handleContinue()}>Continue</SelectButton>
          </Background>
        </Container>
    )
  }
}
