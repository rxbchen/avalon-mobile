import { StackNavigator } from "react-navigation";

import SetupScreen from "src/views/SetupScreen";
import HomeScreen from "src/views/HomeScreen";
import NightScreen from "src/views/NightScreen"

const AppNavigationStack = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SetupScreen: {
    screen: SetupScreen
  },
  NightScreen: {
    screen: NightScreen
  }

});

export default AppNavigationStack;
