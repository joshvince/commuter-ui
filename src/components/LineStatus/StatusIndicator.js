import React, { Component } from 'react'; 
import './LineStatus.css';

class StatusIndicator extends Component {
  render() {
    var subheader = this.props.type === "current" ? "right now" : "in the last hour"
    return (
      <div className="statusIndicatorContainer">
        <div className="statusHeadline">{this.props.status}</div>
        <div>{subheader}</div>
      </div>
    );
  }
}

export default StatusIndicator;
