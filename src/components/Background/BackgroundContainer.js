import Background from './Background'
import { connect } from "react-redux"
import Navigation from 'src/models/Navigation'

const mapActionCreators = {
  navigate: Navigation.navigate
}

export default connect(null, mapActionCreators)(Background)