import { AUTH_PROFILE_SUCCESS, AUTH_LOGOUT } from './actions'

const initialState = {
}

export default (state = initialState, action) => {

  switch (action.type) {
    case AUTH_PROFILE_SUCCESS:
      return action.payload
    case AUTH_LOGOUT:
      return initialState
    default:
      return state
  }
}
