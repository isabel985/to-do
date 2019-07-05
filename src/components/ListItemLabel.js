import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteListItem } from './actions';

const ListItemLabel = ({id, onEdit}) => {
  const dispatch = useDispatch();

  const listItems = useSelector(state => state);

  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  const onDelete = (id) => dispatch(deleteListItem(id));

  return (
    <React.Fragment>
    <label 
      className="item-description"ß
    >
      {selectedListItem.description}
    </label>
    <button className="edit-item" type="button" onClick={() => onEdit(id)}>Edit</button>
    <button
						className="delete-item"
						type="button"
						onClick={() => onDelete(id)}>
						x
				</button>
    </React.Fragment>
  );
}

export default ListItemLabel;