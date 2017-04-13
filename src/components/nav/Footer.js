import React, { Component } from 'react';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import BottomNavigation from 'material-ui/BottomNavigation';
import Theme from '../../styles/muitheme';

class Footer extends Component {
  render(){
    let styles = {
      backgroundColor: Theme.palette.primary1Color,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',

      bottom: 0,
      width: '100%',
      padding: '2%'
    }
    return(
      <div style={styles}>
        <a href="http://www.github.com/joshvince">I made this</a>
        <a href="mailto:joshmvince@gmail.com">
          <EmailIcon style={{color: 'white', marginLeft: 10}}/>
        </a>
      </div>
    )
  }

}

export default Footer;
