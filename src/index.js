import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import AppNavigation from './navigation/AppNavigation/AppNavigation'


export default class App extends Component {
    render() {
        console.log('start', store);
        return (
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        );
    }
}
