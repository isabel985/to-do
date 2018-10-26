import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList'
import AddListItem from './containers/AddListItem';

class App extends Component {
  render() {
    return (
        <div>
          <AddListItem />
          <ToDoList />
        </div>
    );
  }
}

export default App;
