import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { createBrowserHistory } from 'history';
import IndexPage from './imports/ui/index'
import 'bootstrap/dist/css/bootstrap.min.css'

const history = createBrowserHistory();

const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={IndexPage}/>
    </Switch>
  </Router>
)


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

