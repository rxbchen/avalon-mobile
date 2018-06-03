import _ from 'lodash'

class Player {
  constructor(initialState = {models: []}) {
    this.initialState = initialState
  }

  getPlayers = (state) => {
    return state && state.Player && state.Player.models
  }

  getPlayerNames = (state) => {
    return state && state.Player && state.Player.models && state.Player.models.map((player) => {return(player.name)})
  }

  getHandlers = () => {
    return Object.assign({}, {
      createPlayers: (state, action) => Object.assign({}, state, action.payload),
      updatePlayers: (state, action) => Object.assign({}, state, {models: action.payload})
    })
  }

  assignRoles = (roles) => {
    return (dispatch, getState) => {
      const models = _.cloneDeep(this.getPlayers(getState()))
      models.forEach((player, index) => {
        player.role = roles[index]
      })
      dispatch({type: 'updatePlayers', payload: models})
    }
  }

  createPlayers = (names) => {
    return (dispatch, getState) => {
      const newPlayerModel = Object.assign({}, getState().Player)
      if (newPlayerModel.models.length) newPlayerModel.models = []
      names.forEach((name) => {
        newPlayerModel.models.push({name})
      })
      return dispatch({type: 'createPlayer', payload: newPlayerModel})
    }
  }

  getReducer = () => {
    let initialState = this.initialState;
    let handlers = this.getHandlers();
    return (state, action) => {
      state = state || initialState;
      const handler = handlers[action.type];
      return handler ? handler(state, action) : state
    }
  }

}

const player = new Player();

export const reducer = player.getReducer();
export default player;
