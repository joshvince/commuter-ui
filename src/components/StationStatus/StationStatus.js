import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import Stations from '../../stationData';
import Client from '../../Client.js';

import TextSelector from './TextSelector';
import LineChips from './LineChips';
import DirectionChips from './DirectionChips';

import './styles.css';

class StationStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stationSelected: '',
      lineSelected: '',
      directionSelected: '',
      lines: [],
      directions: ["Northbound", "Southbound"],
      stationData: Stations.data()
    }
  }

  componentWillMount(){
    Client.getLineObjects((data) => {
      this.setState({
        lines: data
      })
    })
  }

  setStation(val) {
    this.setState({
      stationSelected: val
    })
  }

  setLine(val){
    this.setState({
      lineSelected: val
    })
  }

  setDirection(val){
    this.setState({
      directionSelected: val
    })
  }

  // findActiveLine(stationObj, thisLine){
  //   if (typeof stationObj === 'undefined') {
  //     return '#62808F'
  //   }
  //   else {
  //     var lineList = Object.keys(stationObj);
  //     return lineList.includes(thisLine.name) ? thisLine.color : '#62808F'
  //   }
  //
  // }

  render()  {
    // var stationMasterObj = Stations.data()
    // var stationList = Object.keys(stationMasterObj)
    // var validLines = (this.state.stationSelected === '') ?
    // [] : stationList[this.state.stationSelected]
    // var lineList = this.state.lines.map(obj => {
    //   var bg = this.findActiveLine(stationData[this.state.station], obj)
    //   return (
    //     <Chip
    //       style={{backgroundColor: bg, margin: 4}}
    //       labelStyle={{color: 'white'}}
    //       key={obj.id}
    //     >
    //       {obj.name}
    //     </Chip>
    //   )
    // })
    console.log(this.state)
    var stationList = Object.keys(this.state.stationData)
    return (
      <div>
        <TextSelector
          list={stationList}
          setStation={this.setStation.bind(this)}
        />
        <LineChips
          lines={this.state.lines}
          stationSelected={this.state.stationSelected}
          stationData={this.state.stationData}
          setLine={this.setLine.bind(this)}
        />
        <DirectionChips
          setDirection={this.setDirection.bind(this)}
          directions={this.state.directions}
        />
      </div>
    )
  }
}

export default StationStatus;
