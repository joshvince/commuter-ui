import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LineHeader from './LineHeader';
import StatusIndicator from './StatusIndicator';
import FeedbackContainer from './FeedbackContainer';

import './LineStatus.css'

// TODO: Don't declare this here... it should be passed through some props somewhere...
// or maybe this is state...
var lineData = {
  "name": "Victoria",
  "currentStatus": "Good Service",
  "historicStatus": "Some Problems",
  "color": 'rgb(0,152,216)'
}

class LineStatus extends Component {
  render() {
    return (
      <Paper>
        <LineHeader name={lineData.name} color={lineData.color}/>
        <Paper zDepth={2} id="statusContainer">
          <StatusIndicator status={lineData.currentStatus} type="current" />
          <Divider/>
          <StatusIndicator status={lineData.historicStatus} type="historic" />
        </Paper>
          <FeedbackContainer />
      </Paper>
    );
  }
}

export default LineStatus;
