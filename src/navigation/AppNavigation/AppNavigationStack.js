import { StackNavigator } from "react-navigation";

import SetupScreen from "../../views/SetupScreen";
import HomeScreen from "../../views/HomeScreen";

const AppNavigationStack = StackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SetupScreen: {
        screen: SetupScreen
    }
});

export default AppNavigationStack;
