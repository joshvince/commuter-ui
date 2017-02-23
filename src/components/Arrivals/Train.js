import React, { Component } from 'react';
import styles from './styles.css'


class Train extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="train-wrapper">
        <div className="icon-wrapper">
          <img src={this.props.star}></img>
        </div>
        <div className="arrival-time-wrapper">
          <h1>{this.props.arrivalTime}</h1>min
        </div>
        <div className="destination-wrapper">
          {this.props.destination}
        </div>
      </div>
    )
  }

}

export default Train;
