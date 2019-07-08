import React from 'react';
import NewListItem from '../components/NewListItem';
import { useDispatch } from 'react-redux';
import { addListItem } from '../actions';

const AddListItem = () => {
    const dispatch = useDispatch();
    const onAddListItem = (item) => dispatch(addListItem(item));
    return <NewListItem onAddListItem={onAddListItem} />
}

export default AddListItem;