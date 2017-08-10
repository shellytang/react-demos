import reducer from '../reducer';
import reporter from './redux-reporter.js';
import {createStore, applyMiddleware} from 'redux';

export default () => createStore(reducer, applyMiddleware(reporter));
