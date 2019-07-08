import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveListItem } from '../actions';

// this component will not have a check box but will have a save button

const ListItemEditing = ({id, onCancel}) => {
  // housekeeping
  const dispatch = useDispatch();

  // get all listItems
  const listItems = useSelector(state => state);

  // use the id to get the listItem
  const selectedListItem = listItems.find((listItem) => {
    return listItem.id === id;
  });

  // set our local state to equal the selected listItem's description
  const [description, setDescription] = useState(selectedListItem.description);

  // handle changes to the description
  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  // handle saving the new description value
  const handleDescriptionSave = () => {
    dispatch(saveListItem(id, description));
    onCancel();
  }

  // returning jsx
  return (
    <React.Fragment>
      <input 
        name="description"
        type="text"
        onChange={handleDescriptionChange}
        value={description}
    />
  <button className="save-item" type="button" onClick={() => handleDescriptionSave()}>Save</button>
  <button className="cancel-item" type="button" onClick={() => onCancel()} >Cancel</button>
  </React.Fragment>

  )
}

export default ListItemEditing;