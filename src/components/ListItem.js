import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItemLabel from '../components/ListItemLabel';
import ListItemEditing from '../components/ListItemEditing';

const ListItem = ({item: {id, description}, checked, onToggle, onCancel}) => {
	const [isEditing, setIsEditing] = useState(true);

	// make the description editable
	const onEdit = () => {
		setIsEditing(true);
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
		</li>
		);
};

export default ListItem;