import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class TextSelector extends Component {
  handleNewRequest(value) {
    this.props.setStation(value)
  }

  render(){
    const styles = {
      fontSize: '1.8em'
    }
    return (
      <div>
        <AutoComplete
          hintText={this.props.hint}
          maxSearchResults={6}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.props.dataSource}
          onNewRequest={this.handleNewRequest.bind(this)}
          inputStyle={styles}
          hintStyle={styles}
        />
      </div>
    )
  }

}

export default TextSelector;
