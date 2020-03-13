import React from 'react';
import './home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      employees: [],
    };
  }

  componentDidMount() {
    fetch('api/companies')
      .then((res) => res.json())
      .then((companies) => this.setState({companies}, () => console.log('users fetched...', companies)));

    fetch('api/employees')
      .then((res) => res.json())
      .then((employees) => this.setState({employees}, () => console.log('users fetched...', employees)));
  }

  render() {
    return (
      <>
        <div className="block">
          <h2>Companies</h2>
          <ul>
            {this.state.companies.map((company) => (
              <li key={company.id}>
                <h3>
                  <img className="block-img" src={company.logo} alt="" /> { company.name } ({company.id})
                </h3>
                {company.employees.map((employee) => (
                  <p key={employee.id}>{employee.name}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="block">
          <h2>Employees</h2>
          <ul>
            {this.state.employees.map((employee) => (
              <li key={employee.id}>{ employee.name } from { employee.company.name } (id: {employee.company.id})</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
