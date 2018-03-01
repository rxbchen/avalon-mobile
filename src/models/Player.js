class Player {
  constructor({initialState}) {
    this.initialState = initialState || {models: []}
  }

  getPlayers = (state) => {
    return state && state.Player && state.Player.models
  };

  getHandlers = () => {
    return Object.assign({}, {
      createPlayers: (state, action) => Object.assign({}, state, action.payload),
    })
  };

  createPlayers = (names) => {
    return (dispatch, getState) => {
      const newPlayerModel = Object.assign({}, getState)
      console.log("new player model: ", newPlayerModel)
      names.forEach((name) => {
        newPlayerModel.models.push({name})
      })
      return dispatch({type: 'createPlayer', payload: newPlayerModel})
    }
  };

  getReducer() {
    let initialState = this.initialState;
    let handlers = this.getHandlers();
    return (state, action) => {
      state = state || initialState;
      const handler = handlers[action.type];
      return handler ? handler(state, action) : state
    }
  }

}

const player = new Player({models: []});

export const reducer = player.getReducer();
export default player;
