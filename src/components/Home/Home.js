import React, { Component } from 'react';
import { Link } from 'react-router';
import InfoPane from './InfoPane';
import RaisedButton from 'material-ui/RaisedButton';

import Theme from '../../styles/muitheme';
import Logo from '../../../public/assets/images/icons/icon-512x512.png';
import trainsImg from '../../img/trainsicon.svg'
import LinesImg from '../../img/linesicon.svg'
import Star from '../../img/stars/fullstar.svg';


import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="pane" style={{backgroundColor: Theme.palette.primary2Color, color: 'white'}}>
          <div className="hero-img-wrapper">
            <img src={Logo} alt="choobio!"></img>
          </div>
          <h2>Not all journeys are created equal</h2>
          <RaisedButton
            label="get started"
            secondary={true}
            containerElement={<Link to="/arrivals"/>}
            fullWidth={true}
          />
        </div>
        <InfoPane
          img={trainsImg}
          headlineText="Get live arrival times"
          paragraphText="For all tube stations"
        />
        <InfoPane
          img={Star}
          headlineText="A more comfortable way there"
          paragraphText="Choobio rates trains to help you find a quieter journey"
        />
        <InfoPane
          img={LinesImg}
          headlineText="Works offline"
          paragraphText="No signal, no problem"
        />
        <div className="pane" style={{backgroundColor: Theme.palette.primary1Color, color: 'white'}}>
          <h2>Try it now</h2>
          <RaisedButton
            label="get started"
            secondary={true}
            containerElement={<Link to="/arrivals"/>}
            fullWidth={true}
          />
          <RaisedButton
            label="learn more"
            containerElement={<Link to="/"/>}
            fullWidth={true}
            style={{margin: 30}}
          />
        </div>
      </div>
    );
  }
}

export default Home;
