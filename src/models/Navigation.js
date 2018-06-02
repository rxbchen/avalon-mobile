import { NavigationActions } from "react-navigation";

export default class Navigation {
  static navigate(params) {
    return (dispatch) => dispatch(NavigationActions.navigate(params))
  }
}
