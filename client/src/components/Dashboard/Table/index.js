import React from 'react';
import { Table as CustomTable } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

import './table.scss';

const Table = ({ allUsers }) => {
  
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
              </CustomTable.Row>
            </CustomTable.Header>

            <CustomTable.Body>
              {allUsers.map(user => (
                <CustomTable.Row key={user.id}>
                  <CustomTable.Cell className="bold">{user.name}</CustomTable.Cell>
                  <CustomTable.Cell>{user.designation}</CustomTable.Cell>
                  <CustomTable.Cell>{user.role}</CustomTable.Cell>
                  <CustomTable.Cell>{user.company !== null ? user.company.name : ''}</CustomTable.Cell>
                </CustomTable.Row>
              ))}              
            </CustomTable.Body>
          </CustomTable>
        </div>
        
      </div>
    </div>
  )

}

export default Table;
