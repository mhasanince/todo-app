import React, { Component } from 'react';
import './Todo.css';
import pen from './Pen.svg';
import trash from './Trash.svg';

export default class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <span className="Todo-content">{this.props.content}</span>
        <img style={{ marginRight: '.4rem' }} src={pen} alt="Edit" />
        <img src={trash} alt="Remove" onClick={this.props.remove} />
      </div>
    );
  }
}
