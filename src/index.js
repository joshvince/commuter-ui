import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App';
import Home from './components/Home/Home';
import StationSelector from './components/StationSelector/StationSelector';
import ArrivalsBoard from './components/Arrivals/ArrivalsBoard';
import './styles/index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="arrivals" component={StationSelector}/>
      <Route path="arrivals/:stationId/:lineId" component={ArrivalsBoard}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
