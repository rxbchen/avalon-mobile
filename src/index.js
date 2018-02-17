import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import AppNavigation from './navigation/AppNavigation'


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
