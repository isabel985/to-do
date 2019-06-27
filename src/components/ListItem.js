import React from 'react';
import ListItemLabel from '../components/ListItemLabel';

const ListItem = ({ item: { id, description, isEditing }, checked, onDelete, onToggle, onEdit }) => {
		return (
				<li className="list-item">
						<input 
								onChange={() => onToggle(id)}
								type="checkbox"
								checked={checked}
						/>
						<ListItemLabel id={id} description={description} isEditing={isEditing} />
						{description}
						<button
								className="edit-item"
								type="button" 
								onClick={() => onEdit(id)}>
								edit
						</button>
						<button
								className="delete-item"
								type="button"
								onClick={() => onDelete(id)}>
								x
						</button>
				</li>
		);
};

export default ListItem;