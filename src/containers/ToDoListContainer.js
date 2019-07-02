import React from 'react';
import ListItem from '../components/ListItem';
import { deleteListItem, toggleComplete, editListItem } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

function ToDoList({ listItems, onDelete, onToggle, onEdit }) {
	return (
		<div className="wrapper">
				<h3>to do list:</h3>
				<ul>
						{listItems.map(item => {
								if (!item.completed) {
										return <ListItem 
												item={item} 
												key={item.id}
												onDelete={onDelete}
												onToggle={onToggle} 
												/>;
								};
						})}
					</ul>
					<h3>completed:</h3>
					<ul>
							{listItems.map(item => {
									if (item.completed) {
											return <ListItem 
													item={item} 
													key={item.id}
													onDelete={onDelete}
													onToggle={onToggle} 
													checked="checked"
													/>;
									};
							})}
					</ul>
			</div>
	)
}

const ToDoListContainer = () => {
	const listItems = useSelector(state => state);
	const dispatch = useDispatch();
	// need to be in ListItem.js
	const onDelete = (id) => dispatch(deleteListItem(id));
	const onToggle = (id) => dispatch(toggleComplete(id));
	// 
	return <ToDoList listItems={listItems} onDelete={onDelete} onToggle={onToggle} />
};

export default ToDoListContainer;