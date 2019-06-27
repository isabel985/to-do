// import { connect } from 'react-redux';
import React from 'react';
// import { addListItem } from '../actions';
import NewListItem from '../components/NewListItem';
import { useDispatch } from 'react-redux';
import { addListItem } from '../actions';
 
// const mapDispatchToProps = dispatch => {
//     return {
//         onAddListItem: item => {
//             dispatch(addListItem(item));
//         }
//     }
// }

// export default connect(
//     null, mapDispatchToProps)(NewListItem);

    // change this file to use hooks

const AddListItem = () => {
    const dispatch = useDispatch();
    const onAddListItem = (item) => dispatch(addListItem(item));
    return <NewListItem />
}

export default AddListItem;