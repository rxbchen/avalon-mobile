import SetupScreen from './SetupScreen'
import { connect } from "react-redux"
import Game from 'src/models/Game'
import Player from 'src/models/Player'
import Navigation from 'src/models/Navigation'


const mapStateToProps = state => ({
  game: Game.getFromState(state)
});

const mapActionCreators = {
  navigate: Navigation.navigate,
  assignRoles: Player.assignRoles
};

export default connect(mapStateToProps, mapActionCreators)(SetupScreen);
