import React, { Component } from 'react';
import Lines from '../../parsers/lines.js';
import './styles.css';
import TflColors from '../../styles/TflColors';

class HistoryItem extends Component {
  render(){
    let styles = {
      padding: 5,
      backgroundColor: TflColors[this.props.lineData],
      color: 'white'
    }
    return(
      <div style={styles}>
        {this.props.stationObject.name}<br></br>
        {Lines.prettify(this.props.lineData)}
      </div>
    )
  }

}

export default HistoryItem;
