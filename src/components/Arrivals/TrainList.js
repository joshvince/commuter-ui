import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Train from './Train';
import styles from './styles.css'

class TrainList extends Component {
  constructor(props){
    super(props)
  }

  render(){
    var items = this.props.list.map((el, i) => {
      return(
        <ListItem key={i} disabled={true} style={{padding: 3}}>
          <Train
            star={el.starImg}
            arrivalTime={el.arrivalTime}
            destination={el.destination}
          />
          <Divider />
        </ListItem>
      )
    })
    return(
      <div>
        <List>
          {items}
        </List>
      </div>
    )
  }

}

export default TrainList;
