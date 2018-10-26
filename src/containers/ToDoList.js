import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { deleteListItem, toggleToDo } from '../actions';

function ToDoList({ listItems, onDelete, onToggleToDo }) {
    return (
        <React.Fragment>
            <h3>to do list:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed === false) {
                        return <ListItem onToggleToDo={onToggleToDo} listItem={item} onDelete={onDelete} key={item.id} />;
                    };
                })}
            </ul>
            <h3>completed:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed) {
                        return <ListItem 
                            onToggleToDo={onToggleToDo} 
                            listItem={item} 
                            onDelete={onDelete} 
                            key={item.id}
                            checked="checked" />;
                    };
                })}
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        listItems: state
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      onDelete: id => {
        dispatch(deleteListItem(id));
      },
      onToggleToDo: id => {
        dispatch(toggleToDo(id));
      }
    }
  }

export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList);