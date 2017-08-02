import {createStore} from 'redux'
import reducer from '../reducer'

export default () => createStore(reducer) //function that returns a store
