import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo List!</h1>
        <h4>A Simple React Todo List App.</h4>
      </div>
      <div className="App-content">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
