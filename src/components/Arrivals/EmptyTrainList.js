import React, { Component } from 'react';
import './styles.css';
import emptyStar from '../../img/stars/emptystar.svg';

class EmptyTrainList extends Component {
  render(){
    return(
      <div className="empty-train-list-wrapper">
        <img src={emptyStar} alt="star"></img>
        <br></br>
        <h3>No trains arriving here...</h3>
      </div>)
  }
}

export default EmptyTrainList;
