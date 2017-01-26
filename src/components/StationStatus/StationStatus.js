import React, {Component} from 'react';
import Stations from '../../stationData';

class StationStatus extends Component {
  constructor(props) {
    super(props)
    this.setStation = this.setStation.bind(this);
    this.state = {
      station: "Stockwell",
      lines: null,
      directions: null
    }
  }

  setStation(e) {
    this.setState({
      station: e.target.value
    })
  }

  render()  {
    var stationData = Stations.data()
    var stationList = Object.keys(stationData)
    console.log(`stationdata is: ${JSON.stringify(Object.keys(stationData[this.state.station]))}`)
    return (
      <div>
        <div>
          <input list="station" autoFocus onChange={this.setStation}></input>
          <datalist id="station">
            {stationList.map((station, i) => {
              return <option value={station} key={i}/>
            })}
          </datalist>
        </div>
        <div>
          {
            Object.keys(stationData[this.state.station]).map(line => {
              return <div key={line}>{line} Line</div>
            })
          }
        </div>
      </div>
    )
  }
}

export default StationStatus;
