import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  state = {
    id: uuidv4(),
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      id: uuidv4(),
      content: '',
    });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className="NewTodoForm-input"
            value={this.state.content}
            placeholder="New Todo"
            type="text"
            name="add"
            id="add"
            onChange={this.handleChange}
          />
          <button className="NewTodoForm-button">ADD TODO</button>
        </form>
      </div>
    );
  }
}
