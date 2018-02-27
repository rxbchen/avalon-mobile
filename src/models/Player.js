class Player {
  constructor({initialState}) {
    this.initialState = initialState || {models: []}
  }

  getPlayer = (state, name) => {
    return state && state.Player
  };

  getHandlers = () => {
    return Object.assign({}, {
      createPlayer: (state, action) => Object.assign({}, state, action.payload),
    })
  };

  createPlayer = (data) => {
    return (dispatch, getState) => {
      const newPlayerModel = Object.assign({}, getState)
      newPlayerModel.models.push({name: data})
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

const player = new Player({});

export const reducer = player.getReducer();
export default player;
