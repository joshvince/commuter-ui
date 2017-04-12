import React, { Component } from 'react';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';

class DataMonitor extends Component {
  constructor(props){
    super(props)
    this.state = {
      stale: false
    }
    this.staleData = this.staleData.bind(this)
  }

  componentWillMount(){
    this.intervalId = setInterval(this.staleData, 3000)
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
    var offlineMsg = `You are offline. Arrival times may be wrong`
    var msg = (this.props.offline) ? offlineMsg : onlineMsg
    return(
      <div>
        {msg}
        <RefreshIcon onTouchTap={this.props.refreshAction} />
      </div>
    )
  }

}

export default DataMonitor ;
