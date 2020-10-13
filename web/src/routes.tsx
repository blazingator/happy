import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import { Landing, OrphanagesMap } from './pages' 

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
