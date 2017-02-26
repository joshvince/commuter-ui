import React,{Component} from 'react';
import Client from '../../Client.js';
import Lines from '../../parsers/lines.js';
import TextSelector from './TextSelector';
import OptionSelector from './OptionSelector';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import './styles.css';

class StationSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stationList: [],
      lineList: [],
      selectedStation: null,
      selectedLine: null,
      ready: false
    }
  }

  componentWillMount(){
    Client.getStationList(data => {
      this.setState({
        stationList: data
      })
    })
  }

  setStation(obj){
    var lines = Lines.returnObjects(obj.lines)
    this.setState({
      selectedStation: obj,
      lineList: lines
    })
  }

  setLine(id){
    this.setState({
      selectedLine: id,
      ready: true
    })
  }

  buildUrl(stationObj, lineId){
    var stationId = (stationObj === null) ? "" : stationObj.id
    return `/arrivals/${stationId}/${lineId}`
  }

  render(){
    return (
      <div className='container'>
        <div className='temp-header'>
          <h3>Commuter is in beta</h3>
          District, Circle, Metropolitan, and Hammersmith & City lines are not yet supported.
        </div>
        <Paper className='inputWrapper'>
          <TextSelector
            hint="Travelling from..."
            dataSource={this.state.stationList}
            setStation={this.setStation.bind(this)}
          />
          <OptionSelector
            dataSource={this.state.lineList}
            hint="On the..."
            onSelection={this.setLine.bind(this)}
          />
          <Link to={this.buildUrl(this.state.selectedStation, this.state.selectedLine)}>
            <RaisedButton
              label="Go"
              primary={true}
              disabled={!this.state.ready}
              fullWidth={true}
            />
          </Link>
        </Paper>
      </div>
    )
  }
}

export default StationSelector;
