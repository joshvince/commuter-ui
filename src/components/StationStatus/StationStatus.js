import React, {Component} from 'react';
import Stations from '../../stationData';
import Client from '../../Client.js';

class StationStatus extends Component {
  constructor(props) {
    super(props)
    this.setStation = this.setStation.bind(this);
    this.state = {
      station: "none",
      lines: [],
      directions: null
    }
  }

  componentWillMount(){
    Client.getLineObjects((data) => {
      this.setState({
        lines: data
      })
    })
  }

  setStation(e) {
    this.setState({
      station: e.target.value
    })
  }

  findActiveLine(stationObj, thisLine){
    var lineList = Object.keys(stationObj);
    return lineList.includes(thisLine.name) ? thisLine.color : 'grey'
    // if the name of the line object is present in the keys of the object
    // make the line background be obj.color.
    // otherwise, grey
  }

  render()  {
    var stationData = Stations.data()
    var stationList = Object.keys(stationData)
    var lineList = this.state.lines.map(obj => {
      var bg = this.findActiveLine(stationData[this.state.station], obj)
      return (
        <div key={obj.id} style={{
          backgroundColor: bg,
          color: 'white'
        }}>
          {obj.name}
        </div>
      )
    })
    return (
      <div>
<<<<<<< HEAD
        <StationSelector stationList={stationList} />
        {this.state.station}
        "hit ther"
=======
        <div>
          <input list="station" autoFocus onChange={this.setStation}></input>
          <datalist id="station">
            {stationList.map((station, i) => {
              return <option value={station} key={i}/>
            })}
          </datalist>
        </div>
        {/* <div>
          {
          Object.keys(stationData[this.state.station]).map(line => {
          return <div key={line}>{line} Line</div>
          })
          }
        </div> */}
        <div>
          {lineList}
        </div>
>>>>>>> 16bae15787f8841da53f94cea5c787a737cf309f
      </div>
    )
  }
}

export default StationStatus;
