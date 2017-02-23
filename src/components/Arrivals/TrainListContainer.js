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
    var testList = [
      {
        destination: "Morden",
        arrivalTime: 1,
        starImg: quarterStar
      },
      {
        destination: "Morden",
        arrivalTime: 3,
        starImg: quarterStar
      },
      {
        destination: "Morden",
        arrivalTime: 4,
        starImg: threeQuarterStar
      },
    ]
    return(
      <div>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="inbound" value="inbound">
            <div>
              {/*
                TODO: this should be a material-ui list with the stars as icons
                and there should be a divider between each train
              */}
              <TrainList list={testList}/>
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
