import EndScreen from './EndScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Player from "src/models/Player"
import Game from "src/models/Game"

const mapStateToProps = state => ({
  players: Player.getPlayers(state),
  playerNames: Player.getPlayerNames(state),
  game: Game.getFromState(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate
};

export default connect(mapStateToProps, mapActionCreators)(EndScreen)
