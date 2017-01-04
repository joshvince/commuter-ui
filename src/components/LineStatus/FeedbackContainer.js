import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import Snackbar from 'material-ui/Snackbar';
import Client from '../../Client.js';

import './LineStatus.css';

class FeedbackContainer extends Component {
  constructor(props){
    super(props)
    this.state = {open: false};
    this.handlePositiveFeedback = this.handlePositiveFeedback.bind(this);
    this.handleNegativeFeedback = this.handleNegativeFeedback.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handlePositiveFeedback() {
    this.setState({open: true});
    Client.sendFeedback(this.props.pageData, this.createFeedbackData(true))
  }

  handleNegativeFeedback() {
    this.setState({open: true});
    Client.sendFeedback(this.props.pageData, this.createFeedbackData(false))
  }

  createFeedbackData(outcome) {
    return {timestamp: new Date(), feedback: outcome}
  }

  handleRequestClose() {
    this.setState({open: false});
  }

  render() {
    // dont like the fact that this is declared like this, but i can't think of another way.
    // CSS doesn't appear to talk to the SVG icon...
    const styles = {
      lrgIcon: {
        height: 50,
        width: 50
      },
      lrg: {
        height: 120,
        width: 120,
        padding: 30
      }
    }
    return (
      <div className="feedbackContainer">
        <div className="individualFeedbackWrapper">
          <div className="thumbWrapper">
            <IconButton
              style={styles.lrg}
              iconStyle={styles.lrgIcon}
              onTouchTap={this.handlePositiveFeedback}
            >
              <ThumbUp />
            </IconButton>
          </div>
          <div>
            Got it right
          </div>
        </div>
        <div className="individualFeedbackWrapper">
          <div className="thumbWrapper">
            <IconButton
              style={styles.lrg}
              iconStyle={styles.lrgIcon}
              onTouchTap={this.handleNegativeFeedback}
            >
              <ThumbDown />
            </IconButton>
          </div>
          <div>
            Got it wrong
          </div>
        </div>
        <Snackbar
          open={this.state.open}
          message="Thanks for your feedback"
          autoHideDuration={2500}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default FeedbackContainer;
