import React, { Component } from 'react';
import './styles.css'
import Paper from 'material-ui/Paper';

class Train extends Component {
  render(){
    let due = (this.props.arrivalTime > 1)
    return(
      <Paper className="train-wrapper">
        <div className="icon-wrapper">
          <img src={this.props.star} alt="star"></img>
        </div>
        <div className="arrival-time-wrapper">
          {due ? <h1>{this.props.arrivalTime}</h1> : <h1>Due</h1>}
          {due ? <p>min</p> : null}
        </div>
        <div className="destination-wrapper">
          {this.props.destination}
        </div>
      </Paper>
        )
  }
}

export default Train;
