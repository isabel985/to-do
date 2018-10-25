import React from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

function ToDoList({ listItems, someaction }) {
    // const toDoItems = ["hello", "bye", "seeya"];

    return (
        <ul>
            {listItems.map(item => {
                return (
                    <ListItem item={item} />
                )
            })}
        </ul>
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