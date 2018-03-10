import RoleConfig from './RoleConfig'
import { connect } from "react-redux"
import Game from 'src/models/Game'

const mapStateToProps = state => ({
  game: Game.getFromState(state)
});

const mapActionCreators = {
  updateRoles: Game.updateRoles
};

export default connect(mapStateToProps, mapActionCreators)(RoleConfig);