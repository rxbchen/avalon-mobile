import NightScreen from './NightScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Player from "src/models/Player"

const mapStateToProps = state => ({
  players: Player.getPlayers(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate
}
export default connect(mapStateToProps, mapActionCreators)(NightScreen)
