import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App';
import Home from './components/Home/Home';
import LineList from './components/LineList/LineList';
import LineStatus from './components/LineStatus/LineStatus';
import StationSelector from './components/StationSelector/StationSelector';
import ArrivalsBoard from './components/Arrivals/ArrivalsBoard';
import './styles/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="lines" component={LineList}/>
      <Route path="lines/:lineId" component={LineStatus}/>
      <Route path="stations" component={StationSelector}/>
      {/* test component during initial dev of the arrivals board */}
      <Route path="arrivals" component={ArrivalsBoard}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
