import SetupScreen from './SetupScreen'
import { connect } from "react-redux"
import Game from '../../models/Game'
import Navigation from '../../models/Navigation'


const mapStateToProps = state => ({
  game: Game.getFromState(state)
});

const mapActionCreators = {
  navigate: Navigation.navigate
};

export default connect(mapStateToProps, mapActionCreators)(SetupScreen);
