import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editListItem, saveListItem } from '../actions';
import ListItemLabel from './ListItemLabel';


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
  const [description, setDescription] = useState(selectedListItem);

  // handle changes to the description
  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  // handle saving the new description value
  const handleOnSave = e => {
    function onSave() {
      dispatch(saveListItem(id, description));
    }
  }
  
  // returning jsx
  return (
    <React.Fragment>
      <h3>ListItemEditing</h3>
      <input 
      type="text"
      value={description}
      />
    <button className="save-item" type="button" onClick={() => dispatch(saveListItem(id))}>Save</button>
    <button className="cancel-item" type="button">Cancel</button>
    </React.Fragment>
  )
}

export default ListItemEditing;