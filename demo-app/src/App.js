import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader'

function App() {
  
  return (
    <div className="App">
      <TodoListHeader />
      <TodoList />
    </div>
  );
}

export default App;
