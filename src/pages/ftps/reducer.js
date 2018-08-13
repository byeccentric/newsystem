import { ftps } from '../../config/app'

const { FETCHED, FETCHING, FAIL, ADD, EDIT, DELETE } = ftps.commands

const initialState = {
  items: [],
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING: {
      return { ...state, fetching: true }
    }
    case FAIL: {
      return { ...state, fetching: false, error: action.payload }
    }
    case FETCHED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload,
      }
    }

    case ADD: {
      action.payload.id = state.items.length + 1 + ''
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    }

    case EDIT: {
      return {
        ...state,
        items: state.items.map(ftp => {
          if (ftp.id === parseInt(action.payload.id, 10)) {
            ftp.login = action.payload.login
            ftp.name = action.payload.name
            ftp.password = action.payload.password
            ftp.server = action.payload.server
          }
          return ftp
        }),
      }
    }

    case DELETE: {
      return {
        ...state,
        items: state.items.filter(
          ftp => ftp.id !== parseInt(action.payload, 10)
        ),
      }
    }

    default: {
      return state
    }
  }
}
