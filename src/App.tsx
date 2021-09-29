import React from 'react'
import logo from './logo.svg'
import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as Index from './page/Index'
import * as Solitaria from './page/solitaria/Index'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index.default} />
        <Route exact path="/solitaria" component={Solitaria.default} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
