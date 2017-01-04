import React, { Component } from 'react';

import './FeatureCard.css'

class FeatureCard extends Component {
  render() {
    var active = this.props.active ? "" : "inactive"
    return (
      <div className={`FeatureCard ${active}`}>
        <div>
          <img src={this.props.imgSrc} alt={this.props.featureName} />
        </div>
        <div>{this.props.featureName}</div>
      </div>
    )
  }
}

var test = `fjff`

// return (
//   <Card className="FeatureCard">
//     <CardTitle title="Lines" />
//   </Card>
// );

export default FeatureCard;
