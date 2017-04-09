import React, { Component } from 'react';
import HistoryItem from './HistoryItem';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

class stationHistory extends Component {

  render(){
    if (!this.props.historyList.length) {
      return null
    }
    else {
      return(
        <div className="item-wrapper">
          Recently selected
          <Paper>
            {this.props.historyList.map((obj, i) => {
              return(
                <Link key={i} to={`/arrivals/${obj.station.id}/${obj.line}`}>
                  <HistoryItem
                    stationObject={obj.station}
                    lineData={obj.line}
                  />
                </Link>

              )
            })}
          </Paper>
        </div>
      )
    }
  }
}

export default stationHistory;
