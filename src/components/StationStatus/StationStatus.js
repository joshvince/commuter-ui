import React, {Component} from 'react';
import StationSelector from './StationSelector';
import Stations from '../../stationData';

class StationStatus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      station: "HINTHERE",
      lines: null,
      directions: null
    }
  }

  render()  {
    var stationData = Stations.data()
    var stationList = Object.keys(stationData)
    return (
      <div>
        <StationSelector stationList={stationList} />
        {this.state.station}
      </div>

    )
  }
}

export default StationStatus;
