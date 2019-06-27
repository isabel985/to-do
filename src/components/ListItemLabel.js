import React, { useState } from 'react';

const ListItemLabel = () => {
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  if (isEditing) {
    return (
      <input 
        type="text"
        name="description"
        className="item-editing"
        value={description} 
        onChange={handleDescriptionChange} 
      />
    )
  }

  return (
    <label 
      className="item-description"
    >
      {description}
    </label>
  );
}

export default ListItemLabel;