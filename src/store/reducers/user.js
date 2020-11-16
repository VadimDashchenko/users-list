import {USERS_LOADING_USERS} from '../types/user';

const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case USERS_LOADING_USERS:
            return{
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default reducer;