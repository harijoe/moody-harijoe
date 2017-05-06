export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_PROFILE_REQUEST = 'AUTH_PROFILE_REQUEST'
export const AUTH_PROFILE_SUCCESS = 'AUTH_PROFILE_SUCCESS'
export const AUTH_PROFILE_FAILURE = 'AUTH_PROFILE_FAILURE'

export const authLogin = () => ({
  type: AUTH_LOGIN,
})

export const authLogout = () => ({
  type: AUTH_LOGOUT,
})

export const authProfileRequest = () => ({
  type: AUTH_PROFILE_REQUEST,
})

export const authProfileSuccess = payload => ({
  type: AUTH_PROFILE_SUCCESS,
  payload,
})

export const authProfileFailure = error => ({
  type: AUTH_PROFILE_FAILURE,
  error,
})
