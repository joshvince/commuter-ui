import React, { Component } from 'react';
import { Link } from 'react-router';
import FeatureCard from './FeatureCard';

import trainsImg from '../../img/trainsicon.svg'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="HomeWrapper">
        <h1>Welcome to Choobio!</h1>
        <h3>
          I'll build a homepage soon.
        </h3>
        <Link to="/arrivals">
          <FeatureCard
            featureName="Trains"
            imgSrc={trainsImg}
            active={true}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
