import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App';
import Home from './home/Home';
import LineList from './components/LineList/LineList';
import LineStatus from './components/LineStatus/LineStatus';
import './index.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="lines" component={LineList} />
      <Route path="lines/:lineName" component={LineStatus} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
