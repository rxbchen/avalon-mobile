class Game {
  constructor({initialState}) {
    this.initialState = initialState || {}
  }

  getFromState = (state) => {
    return state && state.Game
  }

  getHandlers = () => {
    return Object.assign({}, {
      updateGame: (state, action) => Object.assign({}, state, action.payload),
    })
  }

  createGame = (data) => {
    return (dispatch) => dispatch({type: 'updateGame', payload: data})
  }

  clearGame = () => {
    return (dispatch) => dispatch({type: 'updateGame', payload: {}})
  }

  updateRoles = (data) => {
    return (dispatch, getState) => {
      let gameObject = Object.assign({}, getState().Game)

      for (let role in gameObject.rolesGood) {
        gameObject.rolesGood[role] = 0
      }
      for (let role in gameObject.rolesBad) {
        gameObject.rolesBad[role] = 0
      }
      for( let i = 0; i < data.rolesGood.length; i++) {
        const role = data.rolesGood[i].value
        gameObject.rolesGood[role]++;
      }
      for( let i = 0; i < data.rolesBad.length; i++) {
        const role = data.rolesBad[i].value
        gameObject.rolesBad[role]++;
      }
      dispatch({type: 'updateGame', payload: gameObject})
    }
  }

  endGame = (goodWin) => {
    return (dispatch, getState) => {
      let gameObject = Object.assign({}, getState().Game)
      gameObject.goodWin = goodWin
      dispatch({type: 'updateGame', payload: gameObject})
    }
  }

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
