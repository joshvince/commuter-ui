import React, { Component } from 'react';
import styles from './styles.css'

import quarterStar from '../../img/stars/quarterstar.svg';
import halfStar from '../../img/stars/halfstar.svg';
import threeQuarterStar from '../../img/stars/threequarterstar.svg';
import fullStar from '../../img/stars/fullstar.svg';

class Train extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="train-wrapper">
        <div className="icon-wrapper">
          <img src={quarterStar}></img>
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
