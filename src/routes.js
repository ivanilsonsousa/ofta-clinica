import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './services/Route';

import Home from './pages/Home'
import Login from './pages/Login'
import BeginPassReset from './pages/BeginPassReset'
import RecoveryPass from './pages/ConfirmPinReset'
import ResetPass from './pages/ResetPass'
import Patient from './pages/Patient'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} authTo="/home" />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/patient" component={Patient} isPrivate />
        <Route path="/begin_password_reset" component={BeginPassReset} />
        <Route path="/confirm_pin_reset" component={RecoveryPass} />
        <Route path="/reset_password" component={ResetPass} />
      </Switch>
    </BrowserRouter>
  )
}
