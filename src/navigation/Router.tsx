import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as PATHS from './paths';
import { Landing, Browse, NotFound } from '../pages';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATHS.HOME} component={Landing} />
        <Route exact path={PATHS.BROWSE} component={Browse} />

        {/* Catch 404 */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
