import reducer from '../reducer';
import reporter from './redux-reporter.js';
import thunk from './redux-thunk.js';
import {createStore, applyMiddleware} from 'redux';

export default () => createStore(reducer, applyMiddleware(thunk, reporter));
