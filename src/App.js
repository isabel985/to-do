import React from 'react';
import './App.css';
import ToDoListContainter from './containers/ToDoListContainer'
// import AddListItem from './containers/AddListItem';
import NewListItem from './components/NewListItem';

function App() {
    return (
        <div>
          <NewListItem />
          <ToDoListContainter />
        </div>
    );
}

export default App;
