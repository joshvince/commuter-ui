import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import { Link } from 'react-router';
import Client from '../../Client.js';

import './LineList.css';

class LineList extends Component {
  constructor(props){
    super(props)
    this.state = {"lines": []}
  }
  parseLines(linesArray){
    return linesArray
  }
  componentWillMount(){
    Client.getLineObjects((data) => {
      this.setState({
        lines: data
      })
    })
  }
  render(){
    var list = this.state.lines.map((obj) => {
      var url = `/lines/${obj.id}`
      return (
        <Link to={url} key={obj.id}>
          <ListItem primaryText={obj.name}
            style={{
                backgroundColor: obj.color,
                color: 'white'
            }}
            className={"line"}
          />
        </Link>
        )
    })
    return(
      <div>
        <h1>Line Status</h1>
        <List>
          {list}
        </List>
      </div>
    )
  }

}

export default LineList;
