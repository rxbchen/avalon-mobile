import Navigation from 'src/models/Navigation'
import ResultsView from './ResultsView'
import { connect } from "react-redux"
import Game from "src/models/Game";
import Quest from "src/models/Quest"

const mapStateToProps = state => ({
  game: Game.getFromState(state),
  quest: Quest.getQuest(state),
})

const mapActionCreators = {
  navigate: Navigation.navigate,
  endGame: Game.endGame,
  updateQuest: Quest.updateQuest,
}

export default connect(mapStateToProps, mapActionCreators)(ResultsView);
