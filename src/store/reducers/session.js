import { login } from '../../config/app';

let { LOGIN, LOGOUT, FAIL } = login.commands;

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    userInfo: {},
    errorMsg: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload.user,
                errorMsg: '',
            }
        case LOGOUT:
            return {
                ...state,
                user: null,
                errorMsg: '',
            }
        case FAIL:
            return {
                ...state,
                errorMsg: action.payload.errorMsg,
            }
        default:
            return state
    }
}