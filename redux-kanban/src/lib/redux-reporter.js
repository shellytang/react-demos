let reporter = store => next => action => {
  console.log('__ACTION__', action)
  //next is the dispatch middleware that will update the state
  try {
    let result = next(action)
    console.log('__STATE__', store.getState())
    return result
  } catch(error) {
    error.action = action
    console.error('___ERROR___', error)
    return error
  }
}

export default reporter
