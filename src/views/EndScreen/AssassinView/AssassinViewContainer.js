import AssassinView from './AssassinView'
import { connect } from "react-redux"
import Player from "src/models/Player"

const mapStateToProps = state => ({
  players: Player.getPlayers(state),
})

export default connect(mapStateToProps)(AssassinView)
