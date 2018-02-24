import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import NavigationReducer from './navigation/AppNavigation/AppNavigationReducer'
import { middleware } from "./navigation/AppNavigation/AppNavigation";

import { reducer as GameReducer } from "./models/Game"

const middlewares = [middleware, thunk];

const AppReducer = combineReducers({
  NavigationReducer,
  GameReducer
});

console.log('reducers', AppReducer)

const store = createStore(AppReducer, applyMiddleware(...middlewares));

export default store;
