import React, { Component } from 'react';
import TflColors from '../../styles/TflColors';

class StationHeader extends Component {
  render(){
    var color = TflColors[this.props.lineId]
    return(
      <div className="station-header" style={{backgroundColor: color, color: 'white'}}>
        <h1>{this.props.stationName}</h1>
        <h1>{this.props.lineName} Line</h1>
      </div>
    )
  }

}

export default StationHeader;
