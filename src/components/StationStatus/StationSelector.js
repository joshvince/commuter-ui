import React, {Component} from 'react';

class StationSelector extends Component {
  constructor(props){
    super(props)
    this.setStation = this.setStation.bind(this)
  }

  setStation(e) {
    this.setState({
      station: e.target.value
    })
  }
  render() {

    return (
      <div>
        <input list="station" autoFocus onChange={this.setStation}></input>
        <datalist id="station">
          {this.props.stationList.map((station, i) => {
            return <option value={station} key={i}/>
          })}
        </datalist>
      </div>
    )
  }
}

export default StationSelector;
