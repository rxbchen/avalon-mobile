import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import NavigationReducer from './navigation/AppNavigation/AppNavigationReducer'
import { middleware } from "./navigation/AppNavigation/AppNavigation";

const middlewares = [middleware, thunk];

const AppReducer = combineReducers({
    NavigationReducer
});
const store = createStore(AppReducer, applyMiddleware(...middlewares));

export default store;
