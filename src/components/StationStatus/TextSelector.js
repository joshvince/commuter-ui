import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class TextSelector extends Component {
  handleNewRequest(value) {
    this.props.setStation(value)
  }

  render(){
    return (
      <div>
        <AutoComplete
          hintText="Select a station"
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.list}
          onNewRequest={this.handleNewRequest.bind(this)}
        />
      </div>
    )
  }
}

export default TextSelector;
