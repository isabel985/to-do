import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemLabel from '../components/ListItemLabel';
import ListItemEditing from '../components/ListItemEditing';

const ListItem = ({item: {id, description}, checked, onToggle}) => {
	const [isEditing, setIsEditing] = useState(false);

	// make the description editable
	const onEdit = () => {
		setIsEditing(true);
	}

	// canceling the editing state
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
						<ListItemLabel id={id} onToggle={onToggle} onEdit={onEdit} /> 
					</React.Fragment>
			}
		</li>
		);
};

export default ListItem;