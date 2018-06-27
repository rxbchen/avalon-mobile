import PlayersConfig from './PlayersConfig'
import { connect } from "react-redux"
import Player from 'src/models/Player'
import Game from "src/models/Game";

const mapStateToProps = state => ({
  game: Game.getFromState(state),
  players: Player.getPlayers(state)
});

const mapActionCreators = {
  createPlayers: Player.createPlayers
};

export default connect(mapStateToProps, mapActionCreators)(PlayersConfig);
