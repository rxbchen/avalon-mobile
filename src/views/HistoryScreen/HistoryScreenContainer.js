import HistoryScreen from './HistoryScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Player from "src/models/Player"
import Quest from "src/models/Quest"

const mapStateToProps = state => ({
  players: Player.getPlayers(state),
  quests: Quest.getQuest(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate
}
export default connect(mapStateToProps, mapActionCreators)(HistoryScreen)
