import Player from "src/models/Player";
import Game from "src/models/Game";
import Quest from "src/models/Quest"
import MissionScreen from "./MissionScreen"
import {connect} from "react-redux";

const mapStateToProps = state => ({
  players: Player.getPlayers(state),
  game: Game.getFromState(state),
  quest: Quest.getQuest(state),
})

export default connect(mapStateToProps)(MissionScreen)