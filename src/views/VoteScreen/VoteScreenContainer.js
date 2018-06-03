import VoteScreen from './VoteScreen'
import { connect } from "react-redux"
import Quest from 'src/models/Quest'
import Game from 'src/models/Game'
import Player from 'src/models/Player'
import Navigation from 'src/models/Navigation'

const mapStateToProps = state => ({
  game: Game.getFromState(state),
  quests: Quest.getQuest(state),
  players: Player.getPlayers(state)
});

const mapActionCreators = {
  navigate: Navigation.navigate,
  updateQuest: Quest.updateQuest,
  endGame: Game.endGame
};

export default connect(mapStateToProps, mapActionCreators)(VoteScreen);
