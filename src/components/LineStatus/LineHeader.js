import React, {Component} from 'react';


class LineHeader extends Component {
  render() {
    return (
      <h1> {this.props.name}</h1>
    );
  }
}

export default LineHeader;
