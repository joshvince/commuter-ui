import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Train from './Train';

class TrainListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 'inbound'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val){
    this.setState({
      value: val
    })
  }

  render(){
    return(
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="inbound" value="inbound">
            <div>
              <Train arrivalTime={4} destination="Stratford" />
            </div>
          </Tab>
          <Tab label="OUTBOUND" value="outbound">
            <div>
              <p>
                A different component called TrainListContainer should go here...
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }

}

export default TrainListContainer;
