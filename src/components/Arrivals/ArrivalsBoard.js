import React, { Component } from 'react';
import StationHeader from './StationHeader';
import Client from '../../Client';
import Storage from '../../storage/indexedDB.js';
import TrainListContainer from './TrainListContainer';
import DataMonitor from './DataMonitor';
import CircularProgress from 'material-ui/CircularProgress';

class ArrivalsBoard extends Component {
  constructor(props){
    super(props)
    var defaultStationObj = {
      arrivals: {
        inbound: {trains: [], name: "inbound"},
        outbound: {trains: [],name: "outbound"}
      },
      station_name: null,
      line_id: null
    }
    this.state = {
      stationData: defaultStationObj,
      isLoading: false,
      offline: false
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentWillMount(){
    // Storage.initialise().then(db => {
    //   this.fetchData()
    // }).catch(err => {
    //   this.fetchData()
    // })

    this.fetchData();
  }

  fetchData(){
    this.setState({
      isLoading: true
    })
    var stationId = this.props.params.stationId
    var lineId = this.props.params.lineId
    Client.getArrivals(stationId, lineId).then(data => {
      this.setState({
        stationData: data,
        isLoading: false,
        offline: false
      })
      Storage.putNewArrivals(data).then(res => {
      }).catch(err => {
        console.error("received a bad response from Storage");
      })
    })
    .catch(err => {
      Storage.getArrivals(stationId, lineId).then(data => {
        this.setState({
          stationData: data,
          isLoading: false,
          offline: true
        })
      }).catch(err => {
        console.error(err)
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
          stationName={this.state.stationData.station_name}
          lineId={this.state.stationData.line_id}
        />
        <DataMonitor
          offline={this.state.offline}
          refreshAction={this.fetchData}
        />
        <TrainListContainer
          inboundList={this.state.stationData.arrivals.inbound.trains}
          inboundName={this.state.stationData.arrivals.inbound.name}
          outboundList={this.state.stationData.arrivals.outbound.trains}
          outboundName={this.state.stationData.arrivals.outbound.name}
        />
      </div>
    )
  }
}

export default ArrivalsBoard;
