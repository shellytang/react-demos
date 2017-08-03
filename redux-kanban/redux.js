//takes a reducer and returns a store

let createStore = (reducer) => {
  let subscribers = []
  //get initial state from reducer
  let state = reducer(undefined, {type: null})
  return {
    getState: () => {
      return state
    },
    dispatch: (action) => {
      //call all middleware
      state = reducer(state, action)
      subscribers.forEach(cb => cb())
      return action
    },
    subscribe: (cb) => {
      subscribers.push(cb)
    },
  }
}

let reducer = (state=0, action) => {
  let {type, payload} = action
  switch(type) {
  case 'INC':
    return payload ? state + payload : state + 1
  case 'DEC':
    return payload ? state - payload : state - 1
  default:
    return state
  }
}

let store = createStore(reducer)

store.subscribe(() => {
  console.log('__STATE__', store.getState())
})

store.dispatch({type: 'NOOP'})
store.dispatch({type: 'lulwat'})
store.dispatch({type: 'INC', payload: 3})
store.dispatch({type: 'INC', payload: 4})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC', payload: 3})
