import QuestScreen from './QuestScreen'
import Navigation from '../../models/Navigation'
import { connect } from "react-redux"
import Quest from "src/models/Quest"


const mapStateToProps = state => ({
  quests: Quest.getQuest(state)
})

const mapActionCreators = {
  navigate: Navigation.navigate
}

export default connect(mapStateToProps, mapActionCreators)(QuestScreen);
