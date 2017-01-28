import React,{Component} from 'react';
import Stations from '../../stationData';
import Client from '../../Client.js';
import TextSelector from './TextSelector';
import OptionSelector from './OptionSelector';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import './styles.css';


class StationSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      allLines: [],
      stationData: Stations.data(),
      selectedStation: '',
      possibleLines: [],
      possibleDirections: [],
      selectedLine: '',
      selectedDirection: ''
    }
  }

  componentWillMount(){
    Client.getLineObjects(data => {
      this.setState({
        allLines: data
      })
    })
  }

  setStation(station){
    var possibleLines = Object.keys(this.state.stationData[station])
    this.setState({
      selectedStation: station,
      possibleLines: possibleLines
    })
  }

  setLine(line){
    var possibleDirections = this.state.stationData[this.state.selectedStation][line]
    this.setState({
      selectedLine: line,
      possibleDirections: possibleDirections
    })
  }

  setDirection(val){
    this.setState({
      selectedDirection: val,
      ready: true
    })
  }

  render(){
    var stationList = Object.keys(this.state.stationData)
    return (
      <div className='container'>
        <Paper className='inputWrapper'>
          <TextSelector
            hint="Travelling from..."
            dataSource={stationList}
            setStation={this.setStation.bind(this)}
          />
          <OptionSelector
            dataSource={this.state.possibleLines}
            hint="On the..."
            onSelection={this.setLine.bind(this)}
          />
          <OptionSelector
            dataSource={this.state.possibleDirections}
            hint="Going..."
            onSelection={this.setDirection.bind(this)}
          />
          <RaisedButton
            label="Go"
            primary={true}
            disabled={!this.state.ready}
            fullWidth={true}
          />
        </Paper>
      </div>
    )
  }
}

export default StationSelector;
