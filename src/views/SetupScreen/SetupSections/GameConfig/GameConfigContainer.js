import GameConfig from './GameConfig'
import { connect } from "react-redux"
import Game from '../../../../models/Game'

const mapStateToProps = state => ({
  game: Game.getFromState(state)
});

const mapActionCreators = {
  createGame: Game.createGame
};

export default connect(mapStateToProps, mapActionCreators)(GameConfig);
