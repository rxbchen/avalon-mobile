import Navigation from '../../models/Navigation'
import HomeScreen from './HomeScreen'
import { connect } from "react-redux"

const mapActionCreators = {
  navigate: Navigation.navigate
}

export default connect(null, mapActionCreators)(HomeScreen);
