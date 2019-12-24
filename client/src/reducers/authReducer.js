import { LOGIN_REQUEST, NEW_USER_REGISTER } from '../action/type';
import Jwt from 'jwt-decode';

const iState = {
    user: {},
    token: ""
}

export default function (state = iState, action) {
    console.log("Auth REDUCER", action.type)
    switch (action.type) {
        case LOGIN_REQUEST:
           localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                token: action.payload,
                user: Jwt(action.payload.token)   
            }
            break;

        default:
            return state;
    }
}
