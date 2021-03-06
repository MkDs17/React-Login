import React from 'react';
import PropTypes from 'prop-types';

import './dashboard.scss';

import Table from './Table';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    { this.props.isAdmin && this.props.handleGetAllUsers() , this.props.handleGetAllCompanies() }
  }

  render() {

    const {
      user,
      isAdmin,
      allUsers,
    } = this.props;

    return (
    
      <div id="dashboard">
        <div className="dashboard-block">
          
          <div className="dashboard-title">
            <h2>Dashboard</h2>
            <h3>Welcome {user.name} !</h3>
          </div>

          <p>Happy to see you again dear <span className="highlight">{user.name}</span></p>
          <p>Hope you're still enjoy your role as <span className="highlight">{user.designation}</span> at <span className="highlight">{ user.company !== null ? user.company.name : '' }</span>
          </p>
  
          { isAdmin &&
          <div className="dashboard-content">            
            <Table allUsers={allUsers} />
          </div>
          }
          
        </div>
      </div>
    )
  }

}

export default Dashboard;
