import Navigation from '../../models/Navigation'
import HomeScreen from './HomeScreen'
import { connect } from "react-redux"

const mapStateToProps = state => ({

});

const mapActionCreators = {
  navigate: Navigation.navigate
}

export default connect(mapStateToProps, mapActionCreators)(HomeScreen);
