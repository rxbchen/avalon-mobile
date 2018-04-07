
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
    })
  };

  getReducer = () => {
    let initialState = this.initialState;
    let handlers = this.getHandlers();
    return (state, action) => {
      state = state || initialState;
      const handler = handlers[action.type];
      return handler ? handler(state, action) : state
    }
  }

  createQuests = () =>{
    return (dispatch, getState) => {
      const newQuestModel = Object.assign({}, getState().Quest)
      console.log("newquestmodel", newQuestModel)
      getState().Game.quests.forEach((quest,i) => {
        newQuestModel.models.push({quest})
        newQuestModel.models[i].status = i==0?'active':'unvisited'
      })
      return dispatch({type: 'createQuests', payload: newQuestModel})
    }
  }
}

const quest = new Quest();

export const reducer = quest.getReducer();
export default quest;
