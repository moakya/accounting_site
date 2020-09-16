import React from 'react';
import handshake from './handshake.svg'
import { Button, Dialog, IconButton, TextField, Tooltip } from '@material-ui/core';
import About from './components/About'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import InfoIcon from '@material-ui/icons/Info';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './App.css';

function App() {

  const [emailFlag, setEmailFlag] = React.useState(true)
  const [openAbout, setOpenAbout] = React.useState(false)
  const [openServices, setOpenServices] = React.useState(false)
  const [openContactForm, setOpenContactForm] = React.useState(false)

  function handleAboutClose(){
    setOpenAbout(false)
  }

  function handleAboutOpen(){
    setOpenAbout(true)
  }

  function handleServicesClose(){
    setOpenServices(false)
  }

  function handleServicesOpen(){
    setOpenServices(true)
  }

  function handleContactFormClose(){
    setOpenContactForm(false)
  }

  function handleContactFormOpen(){
    setOpenContactForm(true)
  }

  return (
    <React.Fragment>
      <div>
        <div className="Socials">
          <div hidden={emailFlag}>
            <TextField
              id="outlined-read-only-input"
              label="Email"
              size="small"
              defaultValue="test@test.com"
              InputProps={{
                readOnly: true,
              }}
              // variant="outlined"
            />
          </div>
          <Tooltip title="View Email Address">
            <IconButton color="primary"
            onClick={() => setEmailFlag(!emailFlag)}
              // onClick={() => {window.open("mailto:test@test.com")}}
            >
              <AlternateEmailIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Go to Facebook Page">
            <IconButton color="primary"
              onClick={() => {window.open("https://facebook.com")}}
            >
              <FacebookIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Go to Twitter Page">
            <IconButton color="primary"
              onClick={() => {window.open("https://twitter.com")}}
            >
              <TwitterIcon/>
            </IconButton>
          </Tooltip>

          <Tooltip title="Go to LinkedIn Page">
            <IconButton color="primary"
              onClick={() => {window.open("https://linkedin.com")}}
            >
              <LinkedInIcon/>
            </IconButton>
          </Tooltip>
        </div>

        <div className="App">
          <header className="App-header">
              <div className="Main-header">
                Friends Accounting Services
            </div>

            <img src={handshake} className="App-logo" alt="logo" />

            <Button variant="contained" color="primary" size="large" startIcon={<InfoIcon/>} 
              onClick={() => handleAboutOpen()}
            >
              About
            </Button>

            <Button variant="contained" color="default" size="large" startIcon={<BuildIcon/>}
              onClick={() => handleServicesOpen()}
            >
              Services Offered
            </Button>

            <Button variant="contained" color="secondary" size="large" startIcon={<EmailIcon/>}
              onClick={() => handleContactFormOpen()}
            >
              Contact Us
            </Button>
          </header>
          <div className="Signature">
            Desinged with <span role="img" aria-label="heart">❤️</span> in Minnesota
          </div>
        </div>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openAbout}
          onClose={handleAboutClose}
        >
          <About
            show={openAbout}
            closeFunction={handleAboutClose}
          />
        </Dialog>

        <Dialog
          fullWidth
          maxWidth="sm"
          open={openServices}
          onClose={handleServicesClose}
        >
          <Services
            show={openServices}
            closeFunction={handleServicesClose}
          />
        </Dialog>

        <Dialog
          fullWidth
          maxWidth="xs"
          open={openContactForm}
          onClose={handleContactFormClose}
        >
          <ContactForm
            show={openContactForm}
            closeFunction={handleContactFormClose}
          />
        </Dialog>
      </div>
    </React.Fragment>
  );
}

export default App;
