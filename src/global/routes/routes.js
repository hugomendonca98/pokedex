import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import Header from '../../components/header/index';
import Pokemon from '../../components/pokemon/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Header}/>
            <Route path="/pokemon/:pokemon" component={Pokemon}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;