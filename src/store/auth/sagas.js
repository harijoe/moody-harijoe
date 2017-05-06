// https://github.com/diegohaz/arc/wiki/Sagas
import { put, select, take, call } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import { push } from 'react-router-redux'
import cookies from 'services/cookies'
import getLock, { actionTypes as lockActionTypes, actions as lockActions, selectors as lockSelectors, getUserInfo } from 'services/lock'
import { fromRouter } from 'store/selectors'
import * as actions from './actions'

export function* checkAuth() {
  const lock = getLock()
  const accessToken = cookies.get('access_token')

  if (accessToken == null) {
    // Show lock only if auth is not already happening
    const hash = yield select(fromRouter.getHash)
    if (hash.indexOf('access_token') === -1) {
      const pathname = yield select(fromRouter.getPathname)
      lock.show({
        auth: {
          params: {
            state: pathname, // Save pathname as state for after login redirection
          },
        },
      })
    }

    const action = yield take(lockActionTypes.AUTHENTICATED)
    yield put(push(action.payload.state))
    cookies.set('access_token', action.payload.accessToken, {
      maxAge: 86000, // 86400 minus 400 seconds of margin
    })
  } else {
    yield put(lockActions.authenticated({ accessToken }))
  }

  yield put(actions.authProfileRequest())
}

function* handleLogin() {
  yield* checkAuth()
}

function* handleProfile() {
  let profile = JSON.parse(localStorage.getItem('profile'))

  if (profile == null) {
    const accessToken = yield select(lockSelectors.getAccessToken)
    profile = yield call(getUserInfo, accessToken)
    localStorage.setItem('profile', JSON.stringify(profile))
  }

  yield put(actions.authProfileSuccess(profile))
}

function* handleLogout() {
  cookies.set('access_token', null, { maxAge: -1 })
  localStorage.removeItem('profile')

  yield* checkAuth()
}

export default function* () {
  yield [
    takeLatest(actions.AUTH_LOGIN, handleLogin),
    takeLatest(actions.AUTH_LOGOUT, handleLogout),
    takeLatest(actions.AUTH_PROFILE_REQUEST, handleProfile),
  ]
}
