import React, { Component } from 'react';

class StationHeader extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>{this.props.stationName}</h1>
        <h1>{this.props.lineName}</h1>
      </div>
    )
  }

}

export default StationHeader;
