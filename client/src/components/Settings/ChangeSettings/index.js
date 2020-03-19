import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Select } from 'semantic-ui-react';

import './change-settings.scss';

class ChangeSettings extends React.Component {
  constructor(props) {
    super(props)
    const { id, name, designation, role, company } = this.props.user
    this.state = {
      id,
      name,
      designation,
      role,
      company: company.id,
    }
  };

  changeInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  };

  changeSelect = (evt, data) => {
    this.setState({
      [data.name]: data.value,
    })
  };

  onSubmitForm = (evt, data) => {
    const { isAdmin, isUser, onAdminSubmit, onSubmit} = this.props
    evt.preventDefault();
    // Check if admin, send an other middleware submit
    { isAdmin ? onAdminSubmit(this.state) : onSubmit(this.state) }
  };

  render() {

    // If user is also Admin shows more fields
    const { isAdmin } = this.props
    // Use for companyOptions maping
    const companies = this.props.companies
    // Used for the Selected Components
    const { role, company } = this.state    

    const roleOptions = [
      { key: "USER", value: "USER", text: "User" },
      { key: "ADMIN", value: "ADMIN", text: "Admin" },
    ]

    const companyOptions = companies.map(company => {
      return { 
        key: company.id, 
        value: company.id, 
        text: company.name 
      }
    })

    return (
      <>
        <div id="change-settings">
          <Form size="tiny" className="add-entry-form" onSubmit={this.onSubmitForm}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                value={this.state.name}
                name="name"
                onChange={this.changeInput}
                type="text"
              />
              <Form.Input
                fluid
                label="Designation"
                value={this.state.designation}
                name="designation"
                onChange={this.changeInput}
                type="text"
              />
            </Form.Group>

            { isAdmin &&
              <Form.Group widths="equal">
                <Form.Field control={Select} label="Role" options={roleOptions} value={role} name="role" onChange={this.changeSelect} />

                <Form.Field control={Select} label="Company" options={companyOptions} value={company} name="company" onChange={this.changeSelect} />                
              </Form.Group>
            }
            
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
