import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import NavigationReducer from './navigation/AppNavigation/AppNavigationReducer'
import { middleware } from "./navigation/AppNavigation/AppNavigation";

import { reducer as Game } from "./models/Game"
import { reducer as Player } from "./models/Player"


const middlewares = [middleware, thunk];

const AppReducer = combineReducers({
  NavigationReducer,
  Game,
  Player
});

console.log('reducers', AppReducer)

const store = createStore(AppReducer, applyMiddleware(...middlewares));

export default store;
