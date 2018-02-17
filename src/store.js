import { createStore, combineReducers, applyMiddleware } from 'redux';
import NavigationReducer from './navigation/AppNavigationReducer'
import { middleware } from "./navigation/AppNavigation/AppNavigation";


const AppReducer = combineReducers({
    NavigationReducer
});
const store = createStore(AppReducer, applyMiddleware(middleware));

export default store;