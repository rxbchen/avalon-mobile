import QuestScreen from './QuestScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Quest from "src/models/Quest"
import Player from "src/models/Player"


const mapStateToProps = state => ({
  quests: Quest.getQuest(state),
  players: Player.getPlayers(state),
  playerNames: Player.getPlayerNames(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate,
  updateQuest: Quest.updateQuest
}

export default connect(mapStateToProps, mapActionCreators)(QuestScreen);
