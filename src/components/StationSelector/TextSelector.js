import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class TextSelector extends Component {
  handleNewRequest(value) {
    this.props.setStation(value)
  }

  render(){
    return (
      <div>
        <AutoComplete
          hintText="Enter station name"
          maxSearchResults={6}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.dataSource}
          onNewRequest={this.handleNewRequest.bind(this)}
        />
      </div>
    )
  }

}

export default TextSelector;
