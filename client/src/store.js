
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

import thunk from 'redux-thunk'

const iState = [];

const store = createStore(rootReducer, iState, composeWithDevTools(applyMiddleware(thunk)));


export default store;