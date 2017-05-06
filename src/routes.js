import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as components from 'components'

export const homePage = '/'
export const loggedOut = '/logged-out'

export default () => (
  <Switch>
    <Route path={homePage} component={components.HomePage} exact />
  </Switch>
)
