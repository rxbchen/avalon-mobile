import Background from './Background'
import { connect } from "react-redux"
import Navigation from 'src/models/Navigation'
import game from "src/models/Game"
import player from "src/models/Player"
import quest from "src/models/Player"

const mapActionCreators = {
  navigate: Navigation.navigate,
  clearGame: game.clearGame,
  clearPlayers: player.clearPlayers,
  clearQuest: quest.clearQuest
}

export default connect(null, mapActionCreators)(Background)
