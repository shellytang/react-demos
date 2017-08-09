import {log, logError} from './util.js'

let reporter = store => next => action => {
  log('__ACTION__', action)
  //next is the dispatch middleware that will update the state
  try {
    let result = next(action)
    log('__STATE__', store.getState())
    return result
  } catch(error) {
    error.action = action
    logError('___ERROR___', error)
    return error
  }
}

export default reporter
