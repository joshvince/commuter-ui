import React, {Component} from 'react';
import './LineStatus.css';


class LineHeader extends Component {
  render() {
    return (
      <div id="lineHeader" style={{backgroundColor: this.props.lineData.color}}>
        <h3>{this.props.lineData.name} Line</h3>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default LineHeader;
