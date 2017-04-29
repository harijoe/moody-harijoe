// https://github.com/diegohaz/arc/wiki/Sagas
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import * as actions from './actions'

export function* handleLoginRequest(action) {
  try {
    const data = yield call([api, api.post], '/resources', newData)
    yield put(actions.resourceCreateSuccess(data))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e))
  }
}

export default function* () {
  yield [
    takeLatest(actions.AUTH_LOGIN_REQUEST, handleLoginRequest),
  ]
}
