import SetupScreen from './SetupScreen'
import { connect } from "react-redux"
import Game from '../../models/Game'

const mapStateToProps = state => ({
  game: Game.getFromState(state)
});

const mapActionCreators = {

};

export default connect(mapStateToProps, mapActionCreators)(SetupScreen);
