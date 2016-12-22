import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LineHeader from './LineHeader';
import StatusIndicator from './StatusIndicator';
import FeedbackContainer from './FeedbackContainer';

import Client from '../../Client.js';

import './LineStatus.css'

// TODO: How can i properly get the line data passed down to this component?
// Perhaps everything Line-related should be wrapped in a container component?
// This container component could then pass down appropriate data about all the lines


class LineStatus extends Component {
  constructor(props){
    super(props)
    this.state = {currentStatus: "", historicStatus: ""}
  }

// TODO: this feels pretty slow. There's noticable lag when loading this data.
// Can this get sped up?

  componentWillMount(){
    Client.getLineData(this.props.params.lineName, (data)=>{
      this.setState({
        currentStatus: data.current,
        historicStatus: data.lastHour
      })
    })
  }

  render() {
    return (
      <Paper>
        <LineHeader name={this.props.params.lineName} color={this.props.color}/>
        <Paper zDepth={2} id="statusContainer">
          <StatusIndicator status={this.state.currentStatus} type="current" />
          <Divider/>
          <StatusIndicator status={this.state.historicStatus} type="historic" />
        </Paper>
          <FeedbackContainer />
      </Paper>
    );
  }
}

export default LineStatus;
