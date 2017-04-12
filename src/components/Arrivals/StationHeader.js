import React, { Component } from 'react';
import TflColors from '../../styles/TflColors';
import Lines from '../../parsers/lines';

class StationHeader extends Component {
  render(){
    var color = TflColors[this.props.lineId]
    var lineText = (this.props.lineId === null) ? "" : Lines.prettify(this.props.lineId)
    return(
      <div className="station-header" style={{backgroundColor: color, color: 'white'}}>
        <h1>{this.props.stationName}</h1>
        <h1>{lineText} Line</h1>
      </div>
    )
  }

}

export default StationHeader;
