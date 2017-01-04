import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Info extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="GOT IT"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="About" onTouchTap={this.handleOpen} />
        <Dialog
          title="About Commuter"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Commuter helps you be smarter on the Tube. <br/>
          See the last hour's status for any tube line, with more to come soon!
        </Dialog>
      </div>
    )

  }
}

export default Info;
