import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class OptionSelector extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: null
    }
  }
  handleChange(e,i,val){
    this.setState({
      value: val
    })
    this.props.onSelection(val)
  }

  render(){
    var menuItems = this.props.dataSource.map((str, i) => {
      return (
        <MenuItem key={i} value={str} primaryText={str}/>
      )
    })
    var isDisabled = (menuItems.length === 0) ? true : false
    return (
      <div>
        <SelectField
          disabled={isDisabled}
          hintText={this.props.hint}
          onChange={this.handleChange.bind(this)}
          value={this.state.value}
        >
          {menuItems}
        </SelectField>
      </div>
    )
  }
}

export default OptionSelector;
