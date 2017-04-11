import React, { Component } from 'react';
import StationHeader from './StationHeader';
import Client from '../../Client';
import Lines from '../../parsers/lines';
import TrainListContainer from './TrainListContainer';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

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
      isLoading: true,
      staleData: false
    }
    this.fetchData = this.fetchData.bind(this)
    this.staleData = this.staleData.bind(this)
    this.networkTimer = this.networkTimer.bind(this)
  }

  componentWillMount(){
    this.fetchData(this.props.params.stationId, this.props.params.lineId)
  }

  fetchData(stationId, lineId){
    Client.getArrivals(stationId, lineId).then(data => {
      console.log(data)
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

  networkTimer(){
    this.interval = setInterval(this.staleData, 30000)
  }

  staleData(){
    this.setState({
      staleData: true
    })
  }

  render(){
    this.networkTimer()
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
        <Snackbar open={this.state.staleData} message="Your data is stale" />
      </div>
    )
  }
}

export default ArrivalsBoard;
