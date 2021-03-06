import { StackNavigator } from "react-navigation"

import SetupScreen from "src/views/SetupScreen"
import HomeScreen from "src/views/HomeScreen"
import NightScreen from "src/views/NightScreen"
import HistoryScreen from "src/views/HistoryScreen"
import QuestScreen from "src/views/QuestScreen"
import VoteScreen from "src/views/VoteScreen"
import MissionScreen from "src/views/MissionScreen"
import EndScreen from "src/views/EndScreen"

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
  HistoryScreen: {
    screen: HistoryScreen
  },
  QuestScreen: {
    screen: QuestScreen
  },
  VoteScreen: {
    screen: VoteScreen
  },
  MissionScreen: {
    screen: MissionScreen
  },
  EndScreen: {
    screen: EndScreen
  },
});

export default AppNavigationStack;
