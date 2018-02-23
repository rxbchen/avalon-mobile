import {NavigationActions} from "react-navigation";

class Game {
  constructor({initialState}) {
    this.initialState = initialState || {}
  }

  setGame() {

  }

  getHandlers = () => {
    return Object.assign({}, {
      updateGame : (state, action) => Object.assign({}, state, {game: action.payload}),
    })
  }

  updateGame(data) {
      return (dispatch) => dispatch({type: 'updateGame', payload: data})
  }


  getReducer() {
    let initialState = this.initialState
    let handlers = this.getHandlers()
    return (state, action) => {
      state = state || initialState
      const handler = handlers[action.type];
      return handler ? handler(state, action) : state
    }
  }

}
