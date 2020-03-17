import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import './app.scss';

import Header from '../Header';
import Footer from '../Footer';
import Login from '../../containers/Login';
import Home from '../Home';
import Dashboard from '../../containers/Dashboard';
import Settings from '../Settings';

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
          </Route>
          
          {isUser &&
            <Route exact path="/dashboard">
              <Dashboard user={userInfos} />
           </Route>
          }
          
          {isUser &&
            <Route exact path="/settings">
              <Settings user={userInfos} />
            </Route>
          }

          <Route path="/" component={Home} />
        </Switch>
        <Footer />
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
