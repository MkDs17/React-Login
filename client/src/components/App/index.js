import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import './app.scss';

import Header from '../Header';
import Login from '../../containers/Login';
import Home from '../Home';
import Dashboard from '../../containers/Dashboard';

class App extends React.Component {

  render() {

    const { isUser, isAdmin, handleDisconnect, userInfos } = this.props;

    return (
      <div id="app">
        <ReactNotifications />
        <Header disconnect={handleDisconnect} isUser={isUser} />
        <Switch>
            <Route path="/login">
              {isUser ? <Redirect to="/dashboard" /> : <Login />}
              {/* <Dashboard user={userInfos} /> */}
            </Route>
            <Route exact path="/dashboard">
              <Dashboard user={userInfos} />
            </Route>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isUser: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};

export default App;
