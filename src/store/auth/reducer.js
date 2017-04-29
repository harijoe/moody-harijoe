import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT_SUCCESS,
} from './actions'

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token'),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      }
    case AUTH_LOGIN_SUCCESS:
      return { ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      }
    case AUTH_LOGIN_FAILURE:
      return { ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      }
    case AUTH_LOGOUT_SUCCESS:
      return { ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
