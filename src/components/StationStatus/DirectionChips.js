import React,{Component} from 'react';
import Chip from 'material-ui/Chip';

import './styles.css';

class DirectionChips extends Component {
  constructor(props){
    super(props)

  }

  handleTouchTap(e) {
    this.props.setDirection(e.target.innerHTML)
  }

  renderChip(direction){
    return (
      <Chip
        style={{background: '#62808F', margin: 4}}
        labelStyle={{color: 'white'}}
        key={direction}
        onTouchTap={this.handleTouchTap.bind(this)}
      >
        {direction}
      </Chip>
    )
  }
  render() {
    var list = this.props.directions.map(str => {
      return this.renderChip(str)
    })
    return (
      <div className={'wrapper'}>
        {list}
      </div>

    )
  }
}

export default DirectionChips;
