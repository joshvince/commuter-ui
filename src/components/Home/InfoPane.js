import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import './styles.css'

class InfoPane extends Component {
  render(){
    return(
      <Paper className="pane" >
        <div className="img-wrapper">
          <img src={this.props.img} alt="choobio!"></img>
        </div>
        <h2>
          {this.props.headlineText}
        </h2>
        {this.props.paragraphText}
      </Paper>
    )
  }

}

export default InfoPane;
