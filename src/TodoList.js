import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  add = (todo) => {
    this.setState((st) => ({
      todos: [...st.todos, todo],
    }));
  };

  remove = (id) => {
    this.setState((state) => ({
      todos: this.state.todos.filter((todo) => id !== todo.id),
    }));
  };

  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              content={todo.content}
              remove={() => this.remove(todo.id)}
            />
          );
        })}
        <NewTodoForm add={this.add} />
      </div>
    );
  }
}