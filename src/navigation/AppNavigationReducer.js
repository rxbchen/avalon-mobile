import  AppNavigationStack  from "./AppNavigation/AppNavigationStack";

// We set the initial state of the navigator to route "screen1", i.e screen1 will be displayed first.
const initialState = AppNavigationStack.router.getStateForAction(
    AppNavigationStack.router.getActionForPathAndParams("HomeScreen")
);

const navigationReducer = (state = initialState, action) => {
    // **action**  will be of type: {"type": "AppNavigation/NAVIGATE", "routeName": SOME_ROUTE}
    // gets the new updated state of the navigator (previous state + new route), will return null if the action is not understandable.
    console.log('stacl',AppNavigationStack);
    const newState = AppNavigationStack.router.getStateForAction(action, state);
    return newState || state;
};

export default navigationReducer;