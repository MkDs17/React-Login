import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './login.scss';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
    };
  }

  changeInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {

    return (
      <>
        <div className="login-page">
          <div className="block-login">
            <h2>Login</h2>
            <Form onSubmit={this.onSubmitForm}>
              <Form.Input
                placeholder="Username"
                value={this.state.username}
                name="username"
                onChange={this.changeInput}
                type="text"
              />
              <Form.Input
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.changeInput}
                type="password"
              />
              <Button className="cstm-btn" type="submit">Submit</Button>
            </Form>
          </div>
        </div>
        
      </>
    );
  }
}

Login.propTypes = {  
  onSubmit: PropTypes.func.isRequired,
};

export default Login;
