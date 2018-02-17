import React, { Component } from "react";
import { addNavigationHelpers } from 'react-navigation';
import AppNavigationStack from './AppNavigationStack';
import {
    createReduxBoundAddListener, createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.NavigationReducer,
);

const addListener = createReduxBoundAddListener("root");

export default class AppNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <AppNavigationStack
                navigation={ addNavigationHelpers({ addListener, dispatch, state: navigationState })}
            />
        );
    }
}
