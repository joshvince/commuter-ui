import React, { Component } from 'react';
import StationHeader from './StationHeader';
import Client from '../../Client';
import Lines from '../../parsers/lines';
import TrainListContainer from './TrainListContainer';

class ArrivalsBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      stationData: {},
      inboundArrivals: [],
      outboundArrivals: [],
      stationName: "",
      lineName: ""
    }
  }

  componentWillMount(){
    var stationId = this.props.params.stationId
    var lineId = this.props.params.lineId
    Client.getArrivals(stationId, lineId).then(data => {
      this.setState({
        stationData: data,
        inboundArrivals: data.arrivals.inbound,
        outboundArrivals: data.arrivals.outbound,
        stationName: data.station_name,
        lineName: Lines.prettify(data.line_id)
      })
    })
  }
  render(){
    return(
      <div>
        <StationHeader
          stationName={this.state.stationName}
          lineName={this.state.lineName}
          lineId={this.state.stationData.line_id}
        />
        <TrainListContainer
          inboundList={this.state.inboundArrivals}
          outboundList={this.state.outboundArrivals}
        />
      </div>
    )
  }
}

export default ArrivalsBoard;
