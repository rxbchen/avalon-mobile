import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from "react-redux";
import AppNavigationStack from './AppNavigationStack';
import {
    createReduxBoundAddListener, createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';


//
// import HomeScreen from "../../views/HomeScreen"
// import SetupScreen from "../../views/SetupScreen"
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.NavigationReducer,
);

const addListener = createReduxBoundAddListener("root");

class AppNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        console.log('helloworld' , navigationState);
        return (
            <AppNavigationStack
                navigation={ addNavigationHelpers({ addListener, dispatch, state: navigationState })}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        navigationState: state.NavigationReducer
    };
};

export default connect(mapStateToProps)(AppNavigation);
// export {
//     AppNavigationStack,
//     AppNavigation
// }