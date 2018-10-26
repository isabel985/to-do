import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { deleteListItem } from '../actions';

function ToDoList({ listItems, onDelete }) {
    return (
        <React.Fragment>
            <h3>to do list:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed === false) {
                        return <ListItem listItem={item} onDelete={onDelete} key={item.id} />;
                    };
                })}
            </ul>
            <h3>completed:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed) {
                        return <ListItem listItem={item} onDelete={onDelete} key={item.id} />;
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
      }
    }
  }

export default connect(
    mapStateToProps, mapDispatchToProps
)(ToDoList);