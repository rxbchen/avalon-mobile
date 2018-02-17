import { NavigationActions } from "react-navigation"

export default navigate = (route, param = {}) => {
    const navigateToScreen = NavigationActions.navigate({
        routeName: route,
        params: param
    })
    // navigateToscreen will look like this:
    /*
     {
      "type": "AppNavigation/NAVIGATE",
      "routeName": "screen2",
      "params":{
          "name":"Shubhnik"
      }
     }
    */

    // The navigateToScreen2 action is dispatched and new navigation state will be calculated in basicNavigationReducer here ---> https://gist.github.com/shubhnik/b55602633aaeb5919f6f3c15552d1802
    this.navigation.dispatch(navigateToScreen)
}

