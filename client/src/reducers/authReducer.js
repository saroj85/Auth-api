import { LOGIN_REQUEST, NEW_USER_REGISTER } from '../action/type';
// import {getState} from 'react-redux';
import store from '../store';

import Jwt from 'jwt-decode';

const iState = {
    user: {},
    token: ""
}


// const newState = store.getState();
// console.log("newStatte", newState);

export default function (state = iState, action) {
    console.log("Auth REDUCER", action.type)
    switch (action.type) {
        case LOGIN_REQUEST:
           localStorage.setItem("token", action.payload.token)
            return {
                ...state,
            }
            break;

        default:
            return state;
    }
}
