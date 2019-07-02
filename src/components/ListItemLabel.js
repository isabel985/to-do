import React from 'react';
import { useSelector } from 'react-redux';

const ListItemLabel = ({id, onEdit}) => {
  const listItems = useSelector(state => state);

  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  return (
    <React.Fragment>
    <label 
      className="item-description"
    >
      {selectedListItem.description}
    </label>
    <button className="edit-item" type="button" onClick={() => onEdit(id)}>Edit</button>
    </React.Fragment>
  );
}

export default ListItemLabel;