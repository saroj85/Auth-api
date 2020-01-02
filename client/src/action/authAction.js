import { LOGIN_REQUEST, NEW_USER_REGISTER, USER_DATA, GET_ALL_USER_LIST, DELETE_USER_BY_ID } from './type';
import swal from 'sweetalert';

export const loginRequest = (email, password) => dispatch => {
    let data = {
        email: email,
        password: password,
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



export const signUpRequest = (data) => dispatch => {
    fetch('http://localhost:5000/api/user/Register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: NEW_USER_REGISTER,
            payload: json
        }, function () {
            getAllUserList();
        }


        ));


}



export const userDataRequest = () => dispatch => {
    let data = {
        token: localStorage.getItem("token")
    };

    console.log("TOKEN", data.token)


    fetch('http://localhost:5000/api/user/userProfile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: USER_DATA,
            payload: json
        }))
}




export const getAllUserList = () => dispatch => {
    fetch('http://localhost:5000/api/user/getUserList', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: GET_ALL_USER_LIST,
            payload: json
        }))

}


// var url = new URL("https://geo.example.org/api"),
//     params = {lat:35.696233, long:139.570431}
// Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
// fetch(url).then(...)

export const deletUserById = (id, userlistFun) => dispatch => {
    const data = {
        "_id": id
    }
    if (id) {
        fetch(`http://localhost:5000/api/user/delete`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => dispatch({
                type: DELETE_USER_BY_ID,
                payload: json
            }))
        swal("Deleted!", "User Deleted", "success");
    }

}
