export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'

export const requestLogin = (credentials) => {
  return {
    type: AUTH_LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    credentials,
  }
}

export const receiveLogin = (user) => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

export const loginError = (message) => {
  return {
    type: AUTH_LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
}

export const requestLogout = () => {
  return {
    type: AUTH_LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  }
}

export const receiveLogout = () => {
  return {
    type: AUTH_LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  }
}
