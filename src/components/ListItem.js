import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemLabel from '../components/ListItemLabel';
import ListItemEditing from '../components/ListItemEditing';

const ListItem = ({item: {id, description}, checked, onDelete, onToggle}) => {
	const [isEditing, setIsEditing] = useState(false);

	// make the description editable
	const onEdit = () => {
		setIsEditing(true);
	}

	// canceling to the editing state
	const onCancel = () => {
		setIsEditing(false);
	}

	return (
		<li className="list-item">
			{isEditing
				? <ListItemEditing id={id} onCancel={onCancel}/>
				: <React.Fragment>
					<input 
						onChange={() => onToggle(id)}
						type="checkbox"
						checked={checked}
						id={`check-complete-${id}`}
						value={description}
					/>
					<ListItemLabel id={id} /> 
					</React.Fragment>
				}
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