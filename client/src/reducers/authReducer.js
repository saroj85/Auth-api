import { LOGIN_REQUEST, NEW_USER_REGISTER, USER_DATA , GET_ALL_USER_LIST, DELETE_USER_BY_ID} from '../action/type';
// import {getState} from 'react-redux';
import store from '../store';

import Jwt from 'jwt-decode';

const iState = {
    user: {},
    token: "",
    UserLists: [],
    newUser : "",
    deleteUser : ""
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
        case USER_DATA:
            return {
                ...state,
                user : action.payload
            }
        case NEW_USER_REGISTER:
            return {
                ...state,
                newUser : action.payload
            }
        case GET_ALL_USER_LIST:
            return {
                ...state,
                UserLists : action.payload
            }
        case DELETE_USER_BY_ID:
            return {
                ...state,
                deleteUser : action.payload
            }

        default:
            return state;
    }
}
