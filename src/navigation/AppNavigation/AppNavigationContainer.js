import {connect} from "react-redux";
import AppNavigation from './AppNavigation';

const mapStateToProps = state => {
  return {
    navigationState: state.NavigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);
