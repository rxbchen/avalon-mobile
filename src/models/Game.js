class Game {
  constructor({initialState}) {
    this.initialState = initialState || {}
  }

  setGame() {

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
