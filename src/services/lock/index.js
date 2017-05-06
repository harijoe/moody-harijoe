import { auth0 } from 'config'
import Auth0Lock from 'auth0-lock'

const { clientId, domain } = auth0
const lock = new Auth0Lock(clientId, domain, {
  auth: {
    params: {
      scope: 'profile', // Learn about scopes: https://auth0.com/docs/scopes
    },
  },
  closable: false,
})

export const getUserInfo = accessToken => {
  const promise = new Promise((resolve, reject) => {
    lock.getUserInfo(accessToken, (error, profile) => {
      if (error != null) {
        reject(error)
      }

      resolve(profile)
    })
  })

  return promise
}

export default lock

export const actionTypes = {
  SHOW: '@@auth0/SHOW',
  HIDE: '@@auth0/HIDE',
  UNRECOVERABLE_ERROR: '@@auth0/UNRECOVERABLE_ERROR',
  AUTHENTICATED: '@@auth0/AUTHENTICATED',
  AUTHORIZATION_ERROR: '@@auth0/AUTHORIZATION_ERROR',
}

export const actions = {
  show: arg => ({
    type: actionTypes.SHOW,
    payload: arg,
  }),
  hide: arg => ({
    type: actionTypes.HIDE,
    payload: arg,
  }),
  unrecoverableError: arg => ({
    type: actionTypes.UNRECOVERABLE_ERROR,
    payload: arg,
  }),
  authenticated: arg => ({
    type: actionTypes.AUTHENTICATED,
    payload: arg,
  }),
}

export const listenAuthEvents = dispatch => {
  lock.on('show', arg => dispatch(actions.show(arg)))
  lock.on('hide', arg => dispatch(actions.hide(arg)))
  lock.on('unrecoverable_error', arg => dispatch(actions.unrecoverableError(arg)))
  lock.on('authenticated', arg => dispatch(actions.authenticated(arg)))
}

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATED:
      return action.payload
    case actionTypes.UNRECOVERABLE_ERROR:
      return {
        error: action.payload,
      }
    case actionTypes.AUTHORIZATION_ERROR:
      return {
        error: action.payload,
      }
    default:
      return state
  }
}

export const selectors = {
  getAccessToken: state => state.lock.accessToken,
}
