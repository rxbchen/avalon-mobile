import NightScreen from './NightScreen'
import { connect } from "react-redux"
import Player from "src/models/Player"

const mapStateToProps = state => ({
  players: Player.getPlayers(state)
})

const mapActionCreators = {

}

export default connect(mapStateToProps, mapActionCreators)(NightScreen)
