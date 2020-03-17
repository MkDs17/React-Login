import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';

import './change-settings.scss';

class ChangeSettings extends React.Component {
  constructor(props) {
    super(props);

    const {
      id,
      name,
      designation,
      role,
      company,
    } = this.props.user

    this.state = {
      id,
      name,
      designation,
      role,
      company,
    };
  }

  changeInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {

    return (
      <>
        <div id="change-settings">
          <Form size="tiny" className="add-entry-form" onSubmit={this.onSubmitForm}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.changeInput}
                type="text"
              />
              <Form.Input
                fluid
                placeholder="Designation"
                value={this.state.designation}
                name="designation"
                onChange={this.changeInput}
                type="text"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="Role"
                value={this.state.role}
                name="role"
                onChange={this.changeInput}
                type="text"
              />
              {/* <Form.Input
                fluid
                placeholder="Company"
                value={this.state.company}
                name="company"
                onChange={this.changeInput}
                type="text"
              /> */}
            </Form.Group>
            
            <Button className="cstm-btn" type="submit">Submit</Button>
          </Form>
        </div>
      </>
    );
  }
}

ChangeSettings.propTypes = {
};

export default ChangeSettings;
