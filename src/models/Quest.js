import _ from "lodash"


class Quest {
  constructor(initialState = {models: []}) {
    this.initialState = initialState
  }

  getQuest = (state) => {
    return state && state.Quest && state.Quest.models
  };

  getHandlers = () => {
    return Object.assign({}, {
      createQuests: (state, action) => Object.assign({}, state, action.payload),
      updateQuest: (state, action) => this._updateQuest(state, action.payload)
    })
  };

  getReducer = () => {
    let initialState = this.initialState;
    let handlers = this.getHandlers()
    return (state, action) => {
      state = state || initialState
      const handler = handlers[action.type]
      return handler ? handler(state, action) : state
    }
  }

  createQuests = () =>{
    return (dispatch, getState) => {
      const newQuestModel = Object.assign({}, getState().Quest)
      if(newQuestModel.models.length) newQuestModel.models = []
      getState().Game.quests.forEach((quest,i) => {
        newQuestModel.models.push({})
        newQuestModel.models[i].numAdventurers = quest.numAdventurers
        newQuestModel.models[i].reqFails = quest.reqFails
        newQuestModel.models[i].status = i===0?'active':'unvisited'
        newQuestModel.models[i].failedVotes = 0
        newQuestModel.models[i].id = i
        console.log("newquestmodel", newQuestModel)
      })
      newQuestModel.models[0].captainIndex = _.random(getState().Player.models.length -1)
      return dispatch({type: 'createQuests', payload: newQuestModel})
    }
  }

  updateQuest = (quest) => {
    return (dispatch, getState) => {
      return dispatch({type: 'updateQuest', payload: quest})
    }
  }

  _updateQuest = (state, quest) => {
    const models = _.cloneDeep(state.models)
    const index = _.findIndex(models, {id: quest.id})
    if (index >= 0) models[index] = quest
    return Object.assign({}, state, {models})
  }
}

const quest = new Quest();



export const reducer = quest.getReducer();
export default quest;
