
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

import thunk from 'redux-thunk'

const iState = [];

const store = createStore(rootReducer, iState, applyMiddleware(thunk));


export default store;