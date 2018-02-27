import PlayersConfig from './PlayersConfig'
import { connect } from "react-redux"
import Player from '../../../../models/Player'
import Game from "../../../../models/Game";

const mapStateToProps = state => ({
  game: Game.getFromState(state),
  player: Player.getFromState(state)
});

const mapActionCreators = {
  createPlayer: Player.createPlayer
};

export default connect(mapStateToProps, mapActionCreators)(PlayersConfig);
