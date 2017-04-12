import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TflColors from '../../styles/TflColors';

class DataMonitor extends Component {
  constructor(props){
    super(props)
    this.state = {
      stale: false
    }
    this.staleData = this.staleData.bind(this)
  }

  componentWillMount(){
    this.intervalId = setInterval(this.staleData, 30000)
  }

  staleData(){
    this.setState({
      stale: true
    })
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render(){
    var time = (this.state.stale) ? `more than` : `less than`
    var onlineMsg = `Updated ${time} 30s ago`
    var offlineMsg = `You are offline`
    var onlineCta = `Tap to update`
    var offlineCta = `Tap to retry`

    var styles = {
      backgroundColor: TflColors[this.props.lineId],
      color: 'white',
      padding: 10
    }
    return(
      <div style={styles}>
        <div>
          {(this.props.offline) ? offlineMsg : onlineMsg}
        </div>
        <FlatButton
          onTouchTap={this.props.refreshAction}
          label={(this.props.offline) ? offlineCta : onlineCta}
          labelStyle={{color: 'white'}}
        />
      </div>
    )
  }

}

export default DataMonitor ;
