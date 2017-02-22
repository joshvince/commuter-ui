import React, { Component } from 'react';
import styles from './styles.css'

class Train extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="train-wrapper">
        <div className="arrival-time-wrapper">
          {this.props.arrivalTime}<span style={{fontSize: 15}}>min</span>
        </div>
        <div className="destination-wrapper">
          {this.props.destination}
        </div>
      </div>
    )
  }

}

export default Train;
