import SimpleReactValidator from 'simple-react-validator';
import React from 'react'

export default class SimpleReactValidatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator();
  }

  handleChange(value, fieldName) {
    this.setState({[fieldName]: value});
  }

  handleSubmit(event) {
    if (this.validator.allValid()) {
      alert(JSON.stringify(this.state, null, 2));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Simple React Validator Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: "300px"
          }}>

          <label>First Name</label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChange(event.target.value, 'firstName')}
              onBlur={() => this.validator.showMessageFor('firstName')}
            />
            {this.validator.message('firstName', this.state.firstName, 'required|alpha|min:2|max:30')}

            <label>Last Name</label>
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChange(event.target.value, 'lastName')}
              onBlur={() => this.validator.showMessageFor('lastName')}
            />
            {this.validator.message('lastName', this.state.lastName, 'required|alpha')}

            <label>Phone Number</label>
            <input
              type="text"
              value={this.state.phoneNumber}
              onChange={(event) => this.handleChange(event.target.value, 'phoneNumber')}
              onBlur={() => this.validator.showMessageFor('phoneNumber')}
            />
            {this.validator.message('phoneNumber', this.state.phoneNumber, 'required|phone')}

            <label>Email</label>
            <input
              type="text"
              value={this.state.email}
              onChange={(event) => this.handleChange(event.target.value, 'email')}
              onBlur={() => this.validator.showMessageFor('email')}
            />
            {this.validator.message('email', this.state.email, 'required|email')}

            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}
