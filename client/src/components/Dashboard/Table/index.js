import React from 'react';
import { Table as CustomTable, Modal } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

import './table.scss';

import ChangeSettings from '../../../containers/Settings/ChangeSettings'

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      userInfos: [],
      
    };
  }

  // Permet de gérer l'affichage ou non de la modal permettant la modif d'une photo
  handleOpenModal = (userData) => { 
    this.setState({ 
      modalOpen: true,
      userInfos: userData,
    });
  };
  handleCloseModal = () => {
    this.setState({ 
      modalOpen: false,
      userInfos: [],
    })
  };

  render() {

    const { allUsers } = this.props

    return (
  
      <div id="table">
        <div className="table-block">
          
          <div className="table-title">
            <h4><Icon name='id card' /> User's Data</h4>
          </div>
  
          <div className="table-content">
            <CustomTable striped celled>
              <CustomTable.Header>
                <CustomTable.Row>
                  <CustomTable.HeaderCell>Name</CustomTable.HeaderCell>
                  <CustomTable.HeaderCell>Designation</CustomTable.HeaderCell>
                  <CustomTable.HeaderCell>Role</CustomTable.HeaderCell>
                  <CustomTable.HeaderCell>Company</CustomTable.HeaderCell>
                  <CustomTable.HeaderCell>Edit</CustomTable.HeaderCell>
                </CustomTable.Row>
              </CustomTable.Header>
  
              <CustomTable.Body>
                {allUsers.map(user => (
                  <CustomTable.Row key={user.id}>
                    <CustomTable.Cell className="bold">{user.name}</CustomTable.Cell>
                    <CustomTable.Cell>{user.designation}</CustomTable.Cell>
                    <CustomTable.Cell>{user.role}</CustomTable.Cell>
                    <CustomTable.Cell>{user.company !== null ? user.company.name : ''}</CustomTable.Cell>
                    <CustomTable.Cell className="point" textAlign="center" onClick={ () => {this.handleOpenModal({...user})} }>
                      <Icon name="pencil" />
                    </CustomTable.Cell>
                  </CustomTable.Row>
                ))}              
              </CustomTable.Body>
            </CustomTable>
          </div>
          
        </div>

        <Modal
          open={this.state.modalOpen}
          onClose={this.handleCloseModal}
          size="small"
        >
          <Modal.Header>Edit {this.state.userInfos.name}'s informations </Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <ChangeSettings user={this.state.userInfos} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )

  }

}

export default Table;
