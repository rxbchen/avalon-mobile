import NightScreen from './NightScreen'
import { connect } from "react-redux"
import Player from "src/models/Player"

const mapStateToProps = state => ({
  players: Player.getPlayers(state)
})

export default connect(mapStateToProps)(NightScreen)
