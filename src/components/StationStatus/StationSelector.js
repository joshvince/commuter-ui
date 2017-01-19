import React, {Component} from 'react';

class StationSelector extends Component {
  constructor(props){
    super(props)
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    alert('station was: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input list="station" autoFocus ></input>
          <input type="submit" value="Submit"></input>
          <datalist id="station">
            {this.props.stationList.map((station, i) => {
              return <option value={station} key={i}/>
            })}
          </datalist>
        </form>
      </div>
    )
  }
}

export default StationSelector;
