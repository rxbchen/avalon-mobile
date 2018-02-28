class Game {
  constructor({initialState}) {
    this.initialState = initialState || {}
  }

  getFromState = (state) => {
    return state && state.Game
  };

  getHandlers = () => {
    return Object.assign({}, {
      createGame: (state, action) => Object.assign({}, state, action.payload),
    })
  };

  createGame = (data) => {
    return (dispatch) => dispatch({type: 'createGame', payload: data})
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

const game = new Game({});

export const reducer = game.getReducer();
export default game;