import { ftps } from '../../config/app';

let {FETCHED, FETCHING, FAIL} = ftps.commands;

const initialState = {
    items: [],
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING: {
            return {...state, fetching: true}
        }
        case FAIL: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCHED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                items: action.payload,
            }
        }

        case "ADD_FTP": {
            return {
                ...state,
                ftps: [...state.ftps, action.payload],
            }
        }

        case "EDIT_FTP": {
            return {
                ...state,
                ftps: state.ftps.map(ftp => {
                    if (ftp.id === action.payload.id) {
                        ftp.id = action.payload.id;
                        ftp.login = action.payload.login;
                        ftp.name = action.payload.name;
                        ftp.password = action.payload.password;
                        ftp.server = action.payload.server;
                    }
                    return ftp;
                }),
            }
        }

        case "DELETE_FTP": {
            return {
                ...state,
                ftps: state.ftps.filter(ftp => parseInt(ftp.id, 10) !== action.payload)
            }
        }

        default: {
            return state
        }
    }
}
