import React, { Component } from 'react';
import StationHeader from './StationHeader';
import TrainListContainer from './TrainListContainer';

class ArrivalsBoard extends Component {
  render(){
    return(
      <div>
        <StationHeader stationName="Tooting Bec" lineName="Northern" />
        <TrainListContainer />
      </div>
    )
  }
}

export default ArrivalsBoard;
