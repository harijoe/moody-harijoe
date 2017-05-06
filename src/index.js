// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from 'store/configure'
import api from 'services/api'
import { authLogin } from 'store/actions'
import { listenAuthEvents } from 'services/lock'

import App from 'components/App'

const history = createHistory({ basename: process.env.PUBLIC_PATH })
const store = configureStore({}, history, { api: api.create() })

const renderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

listenAuthEvents(store.dispatch)
store.dispatch(authLogin())

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install() // eslint-disable-line global-require
}
