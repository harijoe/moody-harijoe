// https://github.com/diegohaz/arc/wiki/Sagas
import { put, select, take, call } from 'redux-saga/effects'
import { takeLatest } from 'utils/effects'
import cookies from 'services/cookies'
import lock, { actionTypes as lockActionTypes, actions as lockActions, selectors as lockSelectors, getUserInfo } from 'services/lock'
import * as actions from './actions'

export function* checkAuth() {
  const accessToken = cookies.get('access_token')

  if (accessToken == null) {
    const isAuthenticating = localStorage.getItem('is_authenticating')

    if (isAuthenticating == null) {
      localStorage.setItem('is_authenticating', true)
      lock.show()
    }

    const action = yield take(lockActionTypes.AUTHENTICATED)
    cookies.set('access_token', action.payload.accessToken, {
      maxAge: 86000, // 86400 minus 400 seconds of margin
    })
    localStorage.removeItem('is_authenticating')
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
