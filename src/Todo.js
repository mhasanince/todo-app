import React, { Component } from 'react';
import './Todo.css';
// import pen from './Pen.svg';
import trash from './Trash.svg';

export default class Todo extends Component {
  render() {
    // const edit = <img style={{ marginRight: '.4rem' }} src={pen} alt="Edit" />;
    const remove = <img src={trash} alt="Remove" onClick={this.props.remove} />;
    const contentStyle = `Todo-content ${this.props.done ? 'done' : ''}`;
    return (
      <div className="Todo" onClick={this.props.toggleDone}>
        <span className={contentStyle}>{this.props.content}</span>
        {!this.props.done && remove}
      </div>
    );
  }
}
