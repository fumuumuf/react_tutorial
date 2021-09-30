import React from 'react'
import logo from './logo.svg'
import './App.css'

import { HashRouter, Route, Switch } from 'react-router-dom'
import * as Index from './page/Index'
import * as Solitaria from './page/solitaria/Index'

const App: React.FC = () => {
  return (
    // https://qiita.com/ry-itto/items/d11ae12dbe9cd32d83f8#%E4%BD%95%E3%82%92%E3%81%97%E3%81%9F%E3%82%89%E3%81%86%E3%81%BE%E3%81%8F%E3%81%84%E3%81%A3%E3%81%9F%E3%81%AE%E3%81%8B%E8%A7%A3%E6%B1%BA%E6%B3%95
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Index.default} />
        <Route exact path="/solitaria" component={Solitaria.default} />
      </Switch>
    </HashRouter>
  )
}

export default App
