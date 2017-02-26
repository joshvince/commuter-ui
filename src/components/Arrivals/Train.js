import React, { Component } from 'react';
import './styles.css'
import Paper from 'material-ui/Paper';

class Train extends Component {
  render(){
    var arrivalMins = Math.ceil(this.props.arrivalTime / 60)
    return(
      <Paper className="train-wrapper">

        <div className="icon-wrapper">
          <img src={this.props.star} alt="star"></img>
        </div>
        <div className="arrival-time-wrapper">
          <h1>{arrivalMins}</h1>min
        </div>
        <div className="destination-wrapper">
          {this.props.destination}
        </div>

      </Paper>
        )
  }

}

export default Train;
