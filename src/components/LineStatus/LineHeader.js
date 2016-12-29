import React, {Component} from 'react';
import './LineStatus.css';


class LineHeader extends Component {
  render() {
    return (
      <div id="lineHeader" style={{backgroundColor: this.props.data.color}}>
        <h1>{this.props.data.name}<br/>Line</h1>
      </div>
    );
  }
}

export default LineHeader;
