import React, { Component } from 'react';
import { Text, View} from 'react-native'
import styles from './ResultsViewStyle'
import SelectButton from "src/components/SelectButton"
import Quest from "src/models/Quest"
import Game from "src/models/Game"

export default class ResultsView extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    if(this.props.quest[this.props.currentMission].reqFails > this.props.numFails){
      this.props.quest[this.props.currentMission].status = "passed"
    }else{
      this.props.quest[this.props.currentMission].status = "failed"
    }
  }

  MoveToNextScreen(){
    this.props.quest[this.props.currentMission].failedVotes = this.props.numFails
    let numPasses = 0
    let numFails = 0
    for(let i = 0; i < this.props.quest.length; i++) {
      if(this.props.quest[i].status === "passed"){
        numPasses++;
      } else if(this.props.quest[i].status === "failed"){
        numFails++;
      }
    }
    if(this.props.currentMission + 1 < this.props.game.numQuests)
    {
      this.props.quest[this.props.currentMission +1].status = "active"
      this.props.quest[this.props.currentMission +1].captainIndex = (this.props.quest[0].captainIndex + 1)%this.props.game.numPlayers
      this.props.quest[this.props.currentMission +1].adventurers = []
    }

    Quest.updateQuest(this.props.quest)

    let navigateParams = {}
    if(numFails > this.props.quest.length/2){
      navigateParams = {
        routeName: 'EndScreen'
      }
      //Game.endGame(false)
    } else if(numPasses > this.props.quest.length/2) {
      navigateParams = {
        routeName: 'EndScreen'
      }
      //Game.endGame(true)
    } else{
      navigateParams = {
        routeName: 'QuestScreen'
      }
    }
    this.props.navigate(navigateParams)
  }

  render() {
    return (
      <View>
        <View style={styles.textView}>
          <Text style={styles.text}>The Mission {this.props.quest[this.props.currentMission].status} with {this.props.numFails} fails</Text>
        </View>
        <SelectButton linearGradient={styles.mainButton} onPress={() => this.MoveToNextScreen()}>
          Continue
        </SelectButton>
      </View>
    );
  }
}
