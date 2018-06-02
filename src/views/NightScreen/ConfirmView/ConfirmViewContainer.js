import ConfirmView from './ConfirmView'
import Navigation from 'src/models/Navigation'
import { connect } from "react-redux"
import Quest from "src/models/Quest"

const mapActionCreators = {
  navigate: Navigation.navigate ,
  createQuests: Quest.createQuests
}
export default connect(null, mapActionCreators)(ConfirmView)
