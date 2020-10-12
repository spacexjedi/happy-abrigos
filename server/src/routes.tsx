import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/PointsMap';

function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route  path="/" exact component={Landing}/>
            <Route  path="/app" component={PointsMap}/>
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;