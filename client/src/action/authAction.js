import {LOGIN_REQUEST, NEW_USER_REGISTER} from './type';

export const loginRequest = (email, password) => dispatch => {
    let data = {
        email: email,
        password:password,
    }
    fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
         .then(json => dispatch({
            type: LOGIN_REQUEST,
            payload: json
        }))
}
