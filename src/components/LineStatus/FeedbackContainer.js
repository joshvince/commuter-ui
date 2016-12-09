import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

import './LineStatus.css';

class FeedbackContainer extends Component {
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
            <IconButton style={styles.lrg} iconStyle={styles.lrgIcon}>
              <ThumbUp />
            </IconButton>
          </div>
          <div>
            Got it right
          </div>
        </div>
        <div className="individualFeedbackWrapper">
          <div className="thumbWrapper">
            <IconButton style={styles.lrg} iconStyle={styles.lrgIcon}>
              <ThumbDown />
            </IconButton>
          </div>
          <div>
            Got it wrong
          </div>
        </div>
        
      </div>
    );
  }
}

export default FeedbackContainer;
