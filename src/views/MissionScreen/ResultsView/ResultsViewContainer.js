import Navigation from '../../models/Navigation'
import ResultsView from './ResultsView'
import { connect } from "react-redux"
import Player from "src/models/Player";
import Game from "src/models/Game";
import Quest from "src/models/Quest"

const mapStateToProps = state => ({
  players: Player.getPlayers(state),
  game: Game.getFromState(state),
  quest: Quest.getQuest(state),
})

const mapActionCreators = {
  navigate: Navigation.navigate
}

export default connect(mapStateToProps, mapActionCreators)(ResultsView);
