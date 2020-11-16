import {USERS_LOADING_USERS} from '../types/user';

export const loadingUsers = payload => ({
    type: USERS_LOADING_USERS,
    payload
})