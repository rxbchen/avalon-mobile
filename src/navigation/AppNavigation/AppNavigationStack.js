import SetupScreen from "../../views/SetupScreen";
import {StackNavigator} from "react-navigation";
import HomeScreen from "../../views/HomeScreen";

const AppNavigationStack = StackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    },
    SetupScreen: {
        screen: SetupScreen
    }
});

export default AppNavigationStack;