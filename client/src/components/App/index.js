import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import './app.scss';

import Header from '../Header';
import Login from '../../containers/Login';
import Home from '../Home';

class App extends React.Component {

  render() {

    const { isUser } = this.props;

    return (
      <div id="app">
        <Header />
        <Switch>
            <Route path="/login">
              {isUser ? 'est un utilisateur' : <Login />}
            </Route>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;
