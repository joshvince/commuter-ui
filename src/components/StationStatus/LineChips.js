import React,{Component} from 'react';
import Chip from 'material-ui/Chip';

import './styles.css'

class LineChips extends Component {

  findActiveLine(stationObj, thisLine){
    if (typeof stationObj === 'undefined') {
      return '#62808F'
    }
    else {
      var lineList = Object.keys(stationObj);
      return lineList.includes(thisLine.name) ? thisLine.color : '#62808F'
    }
  }

  handleTouchTap(e){
    console.log(e.target.innerHTML)
    this.props.setLine(e.target.innerHTML)
  }

  renderChip(obj,id, masterObj){
    var bg = this.findActiveLine(masterObj[this.props.stationSelected], obj)
    var fn = (bg === '#62808F') ? ()=>{false} : this.handleTouchTap.bind(this)
    return (
      <Chip
        style={{backgroundColor: bg, margin: 4}}
        labelStyle={{color: 'white'}}
        key={id}
        onTouchTap={fn}
      >
        {obj.name}
      </Chip>
    )
  }

  render(){
    var masterObj = this.props.stationData
    var chips = this.props.lines.map((obj,id) => {
      return this.renderChip(obj,id, masterObj)
    })
    return (
      <div className='wrapper'>
        {chips}
      </div>
    )
  }
}

export default LineChips;
