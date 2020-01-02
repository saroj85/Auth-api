import fetch from 'node-fetch';

export const getRequest = (url , type, data) => {
    fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    
}

export const postRequest = (url, type, data) => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}


export const deleteRequest = (url, id, data) => {
    fetch(url + id, {
        method: "DELETe",
        // body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}


export const get = async (url) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"   
        }
    };

    const response = await fetch(url, requestOptions);

    return response

    // check if the request was successfull from it
    // if (data.success === true) {  
    //     // the response was successfull
    //     // we should return the json back to the action.
    //     return data;
    // }
    // else {
    //     console.warn(`faulty data received from the server: `, data, url, requestOptions);
       
    // }
};