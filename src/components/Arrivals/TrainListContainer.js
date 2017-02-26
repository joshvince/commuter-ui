import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TrainList from './TrainList';

import quarterStar from '../../img/stars/quarterstar.svg';
import halfStar from '../../img/stars/halfstar.svg';
import threeQuarterStar from '../../img/stars/threequarterstar.svg';
import fullStar from '../../img/stars/fullstar.svg';

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
          <Tab label="inbound" value="inbound">
            <div>
              {/* <TrainList listName="Best Train" list={[]}/> */}
              <TrainList listName="All Trains" list={this.props.inboundList}/>
            </div>
          </Tab>
          <Tab label="OUTBOUND" value="outbound">
            <div>
              {/* <TrainList listName="Best Train" list={[]} /> */}
              <TrainList listName="All Trains" list={this.props.outboundList}/>
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TrainListContainer;
