import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (todos !== null) {
      todos = this.state.todos.concat(todos);
      this.setState({
        todos: todos,
      });
    }
  }

  add = (todo) => {
    const todos = [...this.state.todos, todo];
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos: todos,
    });
  };

  remove = (id) => {
    const todos = this.state.todos.filter((todo) => id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos: todos,
    });
  };

  done = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos: todos,
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="TodoList">
        {this.state.todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              content={todo.content}
              remove={() => this.remove(todo.id)}
              done={todo.done}
              toggleDone={() => this.done(todo.id)}
            />
          );
        })}
        <NewTodoForm add={this.add} />
      </div>
    );
  }
}
