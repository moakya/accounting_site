import React from 'react';
import logo from './logo.svg';
import { Button, IconButton, Tooltip } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './App.css';

function App() {
  return (
    <div>
      <div className="Socials">
        <Tooltip title="Email">
          <IconButton 
            onClick={() => {window.open("mailto:test@test.com")}}
          >
            <AlternateEmailIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Facebook">
          <IconButton
            onClick={() => {window.open("https://facebook.com")}}
          >
            <FacebookIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Twitter">
          <IconButton
            onClick={() => {window.open("https://twitter.com")}}
          >
            <TwitterIcon/>
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            onClick={() => {window.open("https://linkedin.com")}}
          >
            <LinkedInIcon/>
          </IconButton>
        </Tooltip>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="outlined" size="large" startIcon={<BuildIcon/>}>Services Offered</Button>
          <Button variant="outlined" size="large" startIcon={<EmailIcon/>}>Contact Us</Button>
        </header>
        <div className="Signature">
          Desinged with ❤️ in Minnesota
        </div>
      </div>
    </div>
  );
}

export default App;
