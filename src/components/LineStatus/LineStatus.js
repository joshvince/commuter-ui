import React, {Component} from 'react';
import LineHeader from './LineHeader.js';
import StatusIndicator from './StatusIndicator.js';

// TODO: Don't declare this here... it should be passed through some props somewhere...
// or maybe this is state...
var lineData = {
  "name": "Northern",
  "currentStatus": "Good Service",
  "historicStatus": "Some Problems"
}

class LineStatus extends Component {
  render() {
    return (
      <div>
        <LineHeader name={lineData.name} />
        <StatusIndicator status={lineData.currentStatus} type="current" />
        <StatusIndicator status={lineData.historicStatus} type="historic" />
      </div>
    );
  }
}

export default LineStatus;
