import React, {Component} from 'react';
import './LineStatus.css';


class LineHeader extends Component {
  render() {
    return (
      <div id="lineHeader">
        <h1>{this.props.name}<br/>Line</h1>
      </div>
    );
  }
}

export default LineHeader;
