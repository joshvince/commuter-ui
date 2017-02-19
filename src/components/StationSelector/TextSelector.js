import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class TextSelector extends Component {
  handleNewRequest(obj) {
    this.props.setStation(obj)
  }

  render(){
    let styles = {
      fontSize: '1.8em'
    }
    let dataSourceConfig = {
      text: 'name',
      value: 'id'
    }
    return (
      <div>
        <AutoComplete
          hintText={this.props.hint}
          maxSearchResults={6}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.dataSource}
          dataSourceConfig={dataSourceConfig}
          onNewRequest={this.handleNewRequest.bind(this)}
          inputStyle={styles}
          hintStyle={styles}
        />
      </div>
    )
  }

}

export default TextSelector;
