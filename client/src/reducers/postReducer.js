import { FETCH_POST, NEW_POST } from '../action/type';


const iState = {
    items: [],
    item: {}
}

export default function (state = iState, action) {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
            break;

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
            break;
        default:
            return state;
    }
}
