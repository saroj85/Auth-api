import { FETCH_POST, NEW_POST } from './type';


export const fetchPosts = () => dispatch => {
    console.log("FETCH POST CALLED")
    fetch('http://localhost:5000/api/post', {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: FETCH_POST,
            payload: json
        }));
}


export const newPosts = (title, image, body) => dispatch => {
    let data = {
        title: title,
        image: image,
        body: body,
    }
    fetch('http://localhost:5000/api/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => dispatch({
            type: NEW_POST,
            payload: json
        }))
}
