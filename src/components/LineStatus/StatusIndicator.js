import React, { Component } from 'react'; 

class StatusIndicator extends Component {
  render() {
    var subheader = this.props.type === "current" ? "right now" : "in the last hour"
    return (
      <div>
        <h2>{this.props.status}</h2>
        <p>{subheader}</p>
      </div>
    );
  }
}

export default StatusIndicator;
