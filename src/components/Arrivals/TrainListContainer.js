import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TrainList from './TrainList';

class TrainListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 'inbound'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val){
    this.setState({
      selected: val
    })
  }

  render(){
    return(
      <div>
        <Tabs value={this.state.selected} onChange={this.handleChange}>
          <Tab label={this.props.inboundName} value="inbound">
            <div>
              <TrainList listName="All Trains" list={this.props.inboundList}/>
            </div>
          </Tab>
          <Tab label={this.props.outboundName} value="outbound">
            <div>
              <TrainList listName="All Trains" list={this.props.outboundList}/>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TrainListContainer;
