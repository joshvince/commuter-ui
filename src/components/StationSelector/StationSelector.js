import React,{Component} from 'react';
import Client from '../../Client.js';
import Storage from '../../storage/localStorage.js';
import Lines from '../../parsers/lines.js';
import TextSelector from './TextSelector';
import OptionSelector from './OptionSelector';
import StationHistory from './StationHistory';
import TflColors from '../../styles/TflColors';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import './styles.css';

class StationSelector extends Component {
  constructor(props) {
    super(props)
    var stationHistory = Storage.get('stationHistory')
    this.state = {
      stationList: [],
      lineList: [],
      selectedStation: null,
      stationId: null,
      selectedLine: null,
      stationHistory: stationHistory,
      ready: false
    }
    this.addSelectionToHistory = this.addSelectionToHistory.bind(this)
  }

  componentWillMount(){
    Client.getStationList(resp => {
      this.setState({
        stationList: resp.data
      })
    })
  }

  setStation(obj){
    // var lines = Lines.returnObjects(obj.lines)
    Client.getLineListForStation(obj.id, resp => {
      this.setState({
        selectedStation: obj,
        stationId: obj.id,
        lineList: resp.data.lines
      })
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
    return `arrivals/${stationId}/${lineId}`
  }

  addSelectionToHistory(){
    if (this.state.selectedStation && this.state.selectedLine) {
      let data = {
        station: this.state.selectedStation,
        line: this.state.selectedLine
      }
      Storage.put('stationHistory', data)
    }
  }

  render(){
    return (
      <div className='container'>
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
          <Link to={`arrivals/${this.state.stationId}/${this.state.selectedLine}`}>
            <RaisedButton
              label="Go"
              backgroundColor={TflColors[this.state.selectedLine]}
              labelColor="white"
              disabled={!this.state.ready}
              fullWidth={true}
              onClick={this.addSelectionToHistory}
            />
          </Link>
        </Paper>
        <StationHistory historyList={this.state.stationHistory} />
      </div>
    )
  }
}

export default StationSelector;
