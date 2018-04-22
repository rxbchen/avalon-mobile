import QuestScreen from './QuestScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Quest from "src/models/Quest"
import Players from "src/models/Player"


const mapStateToProps = state => ({
  quests: Quest.getQuest(state),
  players: Players.getPlayers(state),
  playerNames: Players.getPlayerNames(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate,
  updateQuest: Quest.updateQuest
}

export default connect(mapStateToProps, mapActionCreators)(QuestScreen);
