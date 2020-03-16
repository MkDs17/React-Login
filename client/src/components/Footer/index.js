import React from 'react';
import { Link } from "react-router-dom";
import { Popup, Button, Modal, Image, Segment } from 'semantic-ui-react';
import { Emoji } from 'emoji-mart';

import './footer.scss';

import Technos from './Technos';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      modalOpen: false,
    };
  }

  // Permet de gérer l'affichage ou non de la modal
  handleOpen = () => {    
    this.setState({ 
      modalOpen: true,      
    });
  };
  handleClose = () => {
    this.setState({ 
      modalOpen: false,      
    })
  };

  render() {
    return (
      <>
        <div id="footer">
          Made by
          <div className="footer-logo">
            <Image
              src='src/public/assets/img/avataaars.svg'
              as='a'
              href='https://github.com/MkDs17'
              target='_blank'
            />
          </div>
          with
          <div className="footer-tech" onClick={ () => {this.handleOpen()} }>
            <Popup 
              content='Click here to know the technologies used' 
              trigger={
                <Segment>Some Stuff <Emoji emoji='fire' set='google' size={22} /></Segment>
              } 
            />
          </div>
        </div>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
        >
          <Modal.Header>Used Technologies</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Technos />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </>
    );
  }
  
};

Footer.propTypes = {
};

export default Footer;
