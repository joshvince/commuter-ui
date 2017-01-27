import React,{Component} from 'react';
import Stations from '../../stationData';
import Client from '../../Client.js';
import TextSelector from './TextSelector';
import OptionSelector from './OptionSelector';
import RaisedButton from 'material-ui/RaisedButton';


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
      selectedDirection: '',
      ready: false
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
    console.log(this.state)
    var stationList = Object.keys(this.state.stationData)
    return (
      <div>
        <TextSelector
          dataSource={stationList}
          setStation={this.setStation.bind(this)}
        />
        <OptionSelector
          dataSource={this.state.possibleLines}
          hint="Select a line"
          onSelection={this.setLine.bind(this)}
        />
        <OptionSelector
          dataSource={this.state.possibleDirections}
          hint="Select a direction"
          onSelection={this.setDirection.bind(this)}
        />
        <RaisedButton
          label="Go"
          secondary={true}
          disabled={!this.state.ready}
        />

      </div>
    )
  }
}

export default StationSelector;
