import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import LineHeader from './LineHeader';
import StatusIndicator from './StatusIndicator';
import FeedbackContainer from './FeedbackContainer';

import Client from '../../Client.js';

import './LineStatus.css'

class LineStatus extends Component {
  constructor(props){
    super(props)
    this.state = {lineData: {}, currentStatus: "", historicStatus: ""}
  }

// TODO: this feels pretty slow. There's noticable lag when loading this data.
// Can this get sped up?

  componentWillMount(){
    Client.getLineObjects((arr) => {
      var lineData = arr.find(obj=>{ return obj.id === this.props.params.lineId})
      Client.getLineData(lineData.id, (data) => {
        this.setState({
          lineData: lineData,
          currentStatus: data.current,
          historicStatus: data.lastHour
        })
      })
    })
  }

  render() {
    return (
      <Paper>
        <LineHeader lineData={this.state.lineData}/>
        <Paper zDepth={2} id="statusContainer">
          <StatusIndicator status={this.state.currentStatus} type="current" />
          <Divider/>
          <StatusIndicator status={this.state.historicStatus} type="historic" />
        </Paper>
        <FeedbackContainer pageData={this.state}/>
      </Paper>
    );
  }
}

export default LineStatus;
