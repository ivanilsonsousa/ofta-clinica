import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPass from './pages/ForgotPass'
import Patient from './pages/Patient'

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/patient" component={Patient}/>
          <Route path="/forgot-pass" component={ForgotPass}/>
        </Switch>
      </BrowserRouter>
    )
}