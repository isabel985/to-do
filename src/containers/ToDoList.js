import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

function ToDoList({ listItems, someaction }) {
    // const toDoItems = ["hello", "bye", "seeya"];

    return (
        <React.Fragment>
            <h3>to do list:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed === false) {
                        return <ListItem message={item.message} key={item.id} />
                    }
                })}
            </ul>
            <h3>completed:</h3>
            <ul>
                {listItems.map(item => {
                    if (item.completed) {
                        return <ListItem message={item.message} key={item.id} />
                    }
                })}
            </ul>
        </React.Fragment>
    )
}

// export default ToDoList;

const mapStateToProps = state => {
    return {
        listItems: state
    }
}

//   const mapDispatchToProps = dispatch => {
//     return {
//       onDelete: id => {
//         dispatch(deleteBookmark(id));
//       }
//     }
//   }

export default connect(
    mapStateToProps
)(ToDoList);