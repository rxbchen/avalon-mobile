import { StackNavigator } from "react-navigation"

import SetupScreen from "src/views/SetupScreen"
import HomeScreen from "src/views/HomeScreen"
import NightScreen from "src/views/NightScreen"
import QuestScreen from "src/views/QuestScreen"
import VoteScreen from "src/views/VoteScreen"

const AppNavigationStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SetupScreen: {
    screen: SetupScreen
  },
  NightScreen: {
    screen: NightScreen
  },
  QuestScreen: {
    screen: QuestScreen
  },
  VoteScreen: {
    screen: VoteScreen
  }

});

export default AppNavigationStack;
