import React, {Component} from 'react';

export default class ProjectForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      title: '',
      subject: '',
      description: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'text' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
          name="name"
          type="text"
          onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" title="title" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
    );
  }
}