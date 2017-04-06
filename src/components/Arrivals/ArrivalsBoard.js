import React, { Component } from 'react';
import StationHeader from './StationHeader';
import Client from '../../Client';
import Lines from '../../parsers/lines';
import TrainListContainer from './TrainListContainer';
import CircularProgress from 'material-ui/CircularProgress';

class ArrivalsBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      stationData: {},
      inboundArrivals: [],
      inboundName: "inbound",
      outboundArrivals: [],
      outboundName: "outbound",
      stationName: "",
      lineName: "",
      isLoading: true
    }
  }

  componentWillMount(){
    var stationId = this.props.params.stationId
    var lineId = this.props.params.lineId
    Client.getArrivals(stationId, lineId).then(data => {
      this.setState({
        stationData: data,
        inboundArrivals: data.arrivals.inbound.trains,
        inboundName: data.arrivals.inbound.name,
        outboundArrivals: data.arrivals.outbound.trains,
        outboundName: data.arrivals.outbound.name,
        stationName: data.station_name,
        lineName: Lines.prettify(data.line_id),
        isLoading: false
      })
    })
  }

  render(){
    var loader =
      <div className="loader-wrapper">
        <CircularProgress size={80} thickness={7}/>
      </div>
    return(
      this.state.isLoading ? loader :
      <div>
        <StationHeader
          stationName={this.state.stationName}
          lineName={this.state.lineName}
          lineId={this.state.stationData.line_id}
        />
        <TrainListContainer
          inboundList={this.state.inboundArrivals}
          inboundName={this.state.inboundName}
          outboundList={this.state.outboundArrivals}
          outboundName={this.state.outboundName}
        />
      </div>
    )
  }
}

export default ArrivalsBoard;
