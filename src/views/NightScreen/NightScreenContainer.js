import NightScreen from './NightScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Player from "src/models/Player"
import Quest from "src/models/Quest"

const mapStateToProps = state => ({
  players: Player.getPlayers(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate,
  createQuests: Quest.createQuests
}
export default connect(mapStateToProps, mapActionCreators)(NightScreen)
