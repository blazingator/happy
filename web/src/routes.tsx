import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import 
  { Landing, OrphanagesMap, Orphanage, CreateOrphanage } 
from './pages' 

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
