import React, { Component } from 'react';
import { Link } from 'react-router';
import FeatureCard from './FeatureCard';

import linesImg from '../../img/linesicon.svg';
import trainsImg from '../../img/trainsicon.svg'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="HomeWrapper">
        <Link to="/lines">
          <FeatureCard
            featureName="Lines"
            imgSrc={linesImg}
            active={true}
          />
        </Link>
        <Link>
          <FeatureCard
            featureName="Trains"
            imgSrc={trainsImg}
            active={false}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
