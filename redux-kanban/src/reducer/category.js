'use strict'

let validateCategory = (payload) => {
  if(!payload.id || !payload.title || !payload.timestamp) {
    throw new Error('VALIDATION ERROR: category must have id, title, and timestamp')
  }
}

let intialState = []
export default (state=intialState, action) => {
  let {type, payload} = action
  switch(type){
    case 'CATEGORY_CREATE':
      validateCategory(payload)
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      validateCategory(payload)
      return state.map(category =>
        category.id == payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      validateCategory(payload)
      return state.filter(category => category.id !== payload.id)
    case 'CATEGORY_RESET':
      return intialState
    default:
      return state
  }
}


//state = reducer(undefined, {type: null})

//state = reducer(state, {type: 'CATEGORY_CREATE', payload: {id: '123', title: 'cool'}})

//state = reducer(state, {type: 'CATEGORY_CREATE', payload: {id: 'abc', title: 'beans'}})

//state = reducer(state, {type: 'CATEGORY_UPDATE', payload: {id: '123', title: 'iwat'}})

//state = reducer(state, {type: 'CATEGORY_DELETE', payload: {id: '123', title: 'iwat'}})



//state = reducer(state, {type: 'CATEGORY_RESET'})
